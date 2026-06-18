#!/usr/bin/env node
/*
  WTP drift-check. Guards the single sources of truth so the distilled artifacts
  cannot quietly diverge. Run: node scripts/check-drift.mjs
  Exit 0 = consistent, exit 1 = drift found (with a list).

  AGENTS.md is hand-distilled from framework/wtp-framework.en.md (not machine
  generated, on purpose: a transform would degrade the careful compaction). This
  guards the mechanical invariants a distillation must still hold: the bundled
  copies stay identical to their source, the two code representations of the data
  (mcp/wtp.mjs and the web tool's framework.js) agree, the spine still names every
  driver, and the bilingual framework files both exist.
*/
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CLUSTERS, DRIVERS } from "../mcp/wtp.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const ok = [];
const check = (cond, fail, pass) => { if (cond) { if (pass) ok.push(pass); } else { problems.push(fail); } };
const read = (p) => existsSync(join(root, p)) ? readFileSync(join(root, p), "utf8") : null;

// 1. The AGENTS.md spine and its bundled copies must be identical.
const agents = read("AGENTS.md");
check(agents !== null, "AGENTS.md missing", "AGENTS.md present");
for (const copy of ["mcp/agents.md", "cli/templates/AGENTS.md"]) {
  const c = read(copy);
  if (c === null) continue;
  check(c === agents, copy + " differs from AGENTS.md (regenerate: cp AGENTS.md " + copy + ")", copy + " matches AGENTS.md");
}

// 1b. Other bundled copies must match their source.
for (const [copy, src] of [
  ["cli/templates/wtp.mdc", "adapters/cursor/wtp.mdc"],
  ["cli/templates/SKILL.md", "skills/apply-wtp/SKILL.md"]
]) {
  const c = read(copy), s = read(src);
  if (c === null) continue;
  check(s !== null && c === s, copy + " differs from " + src + " (regenerate: cp " + src + " " + copy + ")", copy + " matches " + src);
}

// 2. The five clusters and thirteen drivers must agree across mcp/wtp.mjs and the
//    web tool's framework.js (the two code representations of the same data).
check(CLUSTERS.length === 5, "mcp/wtp.mjs CLUSTERS is not 5 (" + CLUSTERS.length + ")", "wtp.mjs has 5 clusters");
check(Object.keys(DRIVERS).length === 13, "mcp/wtp.mjs DRIVERS is not 13 (" + Object.keys(DRIVERS).length + ")", "wtp.mjs has 13 drivers");

const webSrc = read("assets/data/framework.js") || "";
const webClusterCount = (webSrc.match(/\n\s*id:\s*"/g) || []).length; // cluster objects declare an id
CLUSTERS.forEach((c) => {
  check(webSrc.includes('id: "' + c.id + '"'), "cluster " + c.id + " not found in assets/data/framework.js (cluster drift vs wtp.mjs)");
});
Object.keys(DRIVERS).forEach((id) => {
  check(webSrc.includes("\n    " + id + ": {"), "driver " + id + " not found in assets/data/framework.js (driver drift vs wtp.mjs)");
});
check(webClusterCount >= 5, "assets/data/framework.js declares fewer than 5 cluster ids (found " + webClusterCount + ")", "web tool declares the 5 clusters");
check(problems.filter(p => p.startsWith("cluster ") || p.startsWith("driver ")).length === 0, null, "5 clusters + 13 drivers match across wtp.mjs and the web tool");

// 3. The spine must reference the canonical framework and name every driver.
const agentsTxt = agents || "";
check(agentsTxt.includes("framework/wtp-framework.en.md"), "AGENTS.md does not reference framework/wtp-framework.en.md", "AGENTS.md references the canonical framework file");
Object.values(DRIVERS).forEach((d) => {
  check(agentsTxt.includes(d.name), "AGENTS.md does not name the " + d.name + " driver (dropped from the spine)");
});
check(problems.filter(p => p.includes("dropped from the spine")).length === 0, null, "AGENTS.md names all 13 drivers");

// 4. The bilingual framework files must both exist (the Indonesian layer is a
//    deliberate surface; an edit to one must not silently leave the other behind).
for (const f of ["framework/wtp-framework.en.md", "framework/wtp-framework.id.md"]) {
  check(existsSync(join(root, f)), "framework file missing: " + f, f + " present");
}

// Report.
if (problems.length) {
  console.error("DRIFT FOUND:\n - " + problems.join("\n - "));
  process.exit(1);
}
console.log("drift-check OK\n - " + ok.join("\n - "));
