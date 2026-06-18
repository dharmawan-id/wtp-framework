#!/usr/bin/env node
/*
  WTP MCP server. Exposes the Willingness-to-Pay framework to any MCP-capable
  coding agent or strategist tool: read the framework spine, list the thirteen
  drivers, get one driver's detail, and scaffold a diagnosis from what is known
  about an offer. stdio transport, no network, no telemetry. It only returns the
  framework it bundles and the scaffold it computes locally.
*/
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CLUSTERS, DRIVERS, diagnose } from "./wtp.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const REPO = "https://github.com/dharmawan-id/wtp-framework";
function load(name) { try { return readFileSync(join(here, name), "utf8"); } catch { return ""; } }
const AGENTS = load("agents.md");

const clusterOf = (id) => (CLUSTERS.find((c) => c.id === DRIVERS[id].cluster) || {}).label || "";

const server = new McpServer({ name: "wtp", version: "0.1.0" });

server.tool(
  "wtp_overview",
  "Return the Willingness-to-Pay framework spine: the demand side (13 drivers, 17 amplifiers, inhibitors, magnitude), the supply mirror (value-proposition categories, tactics), the application toolkit (the nine-step diagnostic method, the four product filters, the decision tree), and the ethical guardrails. Read this first before diagnosing why someone would pay for an offer or how to price and position it.",
  {},
  async () => ({ content: [{ type: "text", text: AGENTS || ("The WTP framework spine is at " + REPO + "/blob/main/AGENTS.md") }] })
);

server.tool(
  "wtp_list_drivers",
  "List the thirteen WTP drivers, each with its cluster and its value-proposition category. A driver is a reason someone pays; the value-proposition category is the supply-side framing that matches it.",
  {},
  async () => ({
    content: [{ type: "text", text: Object.entries(DRIVERS).map(([id, d]) => d.name + " (" + clusterOf(id) + ") -> VP " + d.vp + ": " + d.ask).join("\n") }]
  })
);

server.tool(
  "wtp_get_driver",
  "Get one WTP driver in detail by name (for example Solve, Fear, Status, FOMO): its cluster, the value-proposition category, what the buyer is asking for, the matched tactics, and the core message.",
  { driver: z.string().describe("a driver name, for example Solve, Fear, Convenience, Status, Growth, Identity, Belonging, Obligation, Empathy, Values, FOMO, Habit, Entertain") },
  async (a) => {
    const key = String(a.driver || "").trim().toLowerCase();
    const entry = Object.entries(DRIVERS).find(([id, d]) => id === key || d.name.toLowerCase() === key);
    if (!entry) {
      return { content: [{ type: "text", text: "No driver named \"" + a.driver + "\". The thirteen are: " + Object.values(DRIVERS).map((d) => d.name).join(", ") + "." }] };
    }
    const [id, d] = entry;
    const text =
      d.name + "\n" + "=".repeat(d.name.length) + "\n" +
      "Cluster: " + clusterOf(id) + "\n" +
      "Value-proposition category: " + d.vp + "\n" +
      "The buyer is asking for: " + d.ask + "\n" +
      "Matched tactics: " + d.tactics.join(", ") + "\n" +
      "Core message: " + d.message;
    return { content: [{ type: "text", text }] };
  }
);

server.tool(
  "wtp_diagnose",
  "Scaffold a Willingness-to-Pay diagnosis for one offer. Returns the nine-step method, the candidate drivers (from a cluster if you name one, or the full decision tree if not), the four product filters, the inhibitor checklist, the magnitude reminders, the proposal questions, and a ready-to-paste prompt that runs the full diagnosis. The framework classifies more than it predicts, so the result is a structured hypothesis, not a validated score.",
  {
    offer: z.string().optional().describe("a short description of the offer: who pays whom for what"),
    cluster: z.enum(["relieve", "enjoy", "become", "belong", "keepup"]).optional().describe("optional fast-triage guess: relieve, enjoy, become, belong, or keepup"),
    b2b: z.boolean().optional().describe("true if this is an organizational (B2B) buy, which adds the buying-center overlay"),
    stage: z.enum(["awareness", "consideration", "decision", "onboarding", "retention", "advocacy"]).optional().describe("optional journey stage, which tilts the amplifiers")
  },
  async (a) => {
    const r = diagnose({ offer: a.offer, cluster: a.cluster, b2b: a.b2b, stage: a.stage });
    return { content: [{ type: "text", text: r.text + "\n\n----- paste this into your coding agent or strategist -----\n\n" + r.prompt }] };
  }
);

await server.connect(new StdioServerTransport());
