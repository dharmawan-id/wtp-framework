# WTP MCP server

[![npm version](https://img.shields.io/npm/v/wtp-mcp)](https://www.npmjs.com/package/wtp-mcp)
![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

Run the Willingness-to-Pay framework as an MCP server, so any MCP-capable coding agent (Claude Code, Cursor, and others) can read the framework and scaffold a pricing-and-positioning diagnosis on demand, without you copying any files into your project.

It is a small stdio server. It makes no network calls and sends no telemetry. It only returns the framework and the diagnosis plan it computes locally.

## What it gives your agent

Four tools:

- `wtp_overview`: the framework spine: the nine-step method, the thirteen drivers, the decision tree, the inhibitors, the magnitude reminders, and the ethics gate. Your agent reads this first.
- `wtp_list_drivers`: the thirteen drivers, each with its cluster and value-proposition category.
- `wtp_get_driver`: one driver in detail (its cluster, value proposition, what the buyer asks for, the matched tactics, the core message).
- `wtp_diagnose`: you describe the offer (and optionally a cluster guess, a B2B flag, and a journey stage), and it returns the nine-step scaffold, the candidate drivers, the brakes to check, the price-band reminders, and a ready-to-paste prompt that runs the full diagnosis.

## Install

Requirements: Node 18 or newer. No other setup, no API key, no account.

### From npm (once published)

Add this to your MCP client config (for Claude Code, `claude mcp add` or the `mcpServers` block; for Cursor, `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "wtp": { "command": "npx", "args": ["-y", "wtp-mcp"] }
  }
}
```

### From source (works now, before publishing)

Clone the repo, install once, and point your client at the server file:

```bash
git clone https://github.com/dharmawan-id/wtp-framework
cd wtp-framework/mcp && npm install
```

```json
{
  "mcpServers": {
    "wtp": { "command": "node", "args": ["/absolute/path/to/wtp-framework/mcp/server.mjs"] }
  }
}
```

## A note on the framework

The WTP framework maps how persuasion works, which is also a map for manipulation. It carries its own ethics gate: the Consumer Autonomy Test and the red-zone combinations. This server only returns the framework text and a local diagnosis plan; it never tells your agent to fetch and run anything from the internet, and it asks for nothing about your business. Read `server.mjs` and `wtp.mjs` before you trust them.

## Support

- Questions or bugs: open an issue at [github.com/dharmawan-id/wtp-framework/issues](https://github.com/dharmawan-id/wtp-framework/issues).
- A security problem in the code: see [SECURITY.md](https://github.com/dharmawan-id/wtp-framework/blob/main/SECURITY.md) for the private reporting path.
- The full framework, with the amplifiers, the tactics, and the citations, lives in the [main repository](https://github.com/dharmawan-id/wtp-framework).

## License

MIT (this folder is code). The framework text it serves is CC-BY-4.0. The `agents.md` in this folder is a bundled copy of the repo's `AGENTS.md`; regenerate it with `cp ../AGENTS.md agents.md` when the framework changes.
