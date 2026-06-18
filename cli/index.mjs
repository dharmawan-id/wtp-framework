#!/usr/bin/env node
/*
  wtp-apply: install the Willingness-to-Pay framework into your project.
  Zero dependencies. Copies bundled templates into the right place.
*/
import { existsSync, mkdirSync, cpSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const T = join(here, "templates");
const cwd = process.cwd();
const args = process.argv.slice(2);
const cmd = (args[0] || "").toLowerCase();
const force = args.includes("--force");
const REPO = "https://github.com/dharmawan-id/wtp-framework";

function place(src, dest, label) {
  const d = join(cwd, dest);
  if (existsSync(d) && !force) { console.log("skipped: " + dest + " already exists (use --force to overwrite)"); return; }
  mkdirSync(dirname(d), { recursive: true });
  cpSync(join(T, src), d);
  console.log("added: " + dest + "  (" + label + ")");
}

function agents() { place("AGENTS.md", "AGENTS.md", "the framework spine, read by most coding agents"); }
function cursor() { place("wtp.mdc", ".cursor/rules/wtp.mdc", "Cursor adapter"); }
function skill() { place("SKILL.md", ".claude/skills/apply-wtp/SKILL.md", "Claude skill"); }

const help = [
  "wtp-apply: install the Willingness-to-Pay framework into your project.",
  "",
  "  npx wtp-apply init      drop AGENTS.md into this folder (works with most coding agents)",
  "  npx wtp-apply cursor    add the Cursor adapter (.cursor/rules/wtp.mdc)",
  "  npx wtp-apply skill     add the Claude skill (.claude/skills/apply-wtp/)",
  "  npx wtp-apply all       do all three",
  "  --force                 overwrite files that already exist",
  "",
  "Then open your coding agent and ask it to diagnose why a buyer would pay for your offer.",
  "Full framework and the free diagnostic tool: " + REPO
].join("\n");

switch (cmd) {
  case "init": agents(); console.log("\nNext: open your agent and ask it to run a WTP diagnosis on your offer. For Cursor, run wtp-apply cursor; for Claude, wtp-apply skill."); break;
  case "cursor": cursor(); break;
  case "skill": skill(); break;
  case "all": agents(); cursor(); skill(); break;
  default: console.log(help);
}
