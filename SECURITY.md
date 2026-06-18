# Security

The WTP framework has two parts, and they take two reporting paths.

## The framework text

The framework itself is plain markdown you can read. It describes how willingness to pay forms and how to influence it, which is also a map that can be misused. The framework carries its own ethical guardrail for that: the Consumer Autonomy Test and the red-zone combinations in section 23. If you find a way the text could be turned against the people it describes, or a tampered copy circulating somewhere, open an issue. The text has no secret behavior, so these can be discussed openly and every reader benefits from the fix.

## The code that ships as a package

The `wtp-mcp` server and the `wtp-apply` installer ship as npm packages that run on your machine. The MCP server makes no network calls and sends no telemetry; it only returns the framework it bundles and the diagnosis scaffold it computes locally. Read `server.mjs` and `wtp.mjs` before you trust them.

If you find a vulnerability in the code that should stay private until it is fixed, report it through GitHub Private Vulnerability Reporting on the repository (the Security tab, "Report a vulnerability"). That opens a private advisory visible only to you and the maintainer.

Response commitment for a solo-maintained project: acknowledgement within 7 days, and a fix or a published mitigation targeted within 90 days of a confirmed report. Supported version: the latest release. In either path, describe what you found and how to reproduce it.
