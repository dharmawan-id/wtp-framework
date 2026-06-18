# wtp-apply (CLI)

[![npm version](https://img.shields.io/npm/v/wtp-apply)](https://www.npmjs.com/package/wtp-apply)
![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

Install the Willingness-to-Pay framework into your project with one command. No dependencies.

Requirements: Node 18 or newer. Nothing else, no API key, no account.

## Use

```bash
npx wtp-apply init      # drop AGENTS.md into this folder (works with most coding agents)
npx wtp-apply cursor    # add the Cursor adapter (.cursor/rules/wtp.mdc)
npx wtp-apply skill     # add the Claude skill (.claude/skills/apply-wtp/)
npx wtp-apply all       # do all three
```

Add `--force` to overwrite files that already exist.

After installing, open your coding agent and ask it to run a WTP diagnosis on your offer: why a buyer would pay for it, how to price it, and how to position it.

The templates in this package are copies of the repo's `AGENTS.md`, `adapters/cursor/wtp.mdc`, and `skills/apply-wtp/SKILL.md`. The repo's drift-check (`scripts/check-drift.mjs`) keeps them identical to the source.

## Support

- Questions or bugs: open an issue at [github.com/dharmawan-id/wtp-framework/issues](https://github.com/dharmawan-id/wtp-framework/issues).
- A security problem in the code: see [SECURITY.md](https://github.com/dharmawan-id/wtp-framework/blob/main/SECURITY.md) for the private reporting path.
- The full framework and the reasoning behind each driver live in the [main repository](https://github.com/dharmawan-id/wtp-framework).

## License

MIT (this is code). The framework text it installs is CC BY 4.0. See the repo root.
