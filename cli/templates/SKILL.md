---
name: apply-wtp
description: Use when someone wants to know why a buyer would pay for a product, how to price it, how to position it, or why a product is not selling. Runs the Willingness-to-Pay diagnosis: name the buyer's State A and State B, find the primary driver with the removal test, check the demand-side brakes, set a price band, choose a value proposition and tactics, and apply an ethics gate. Triggers on "why would anyone pay for this", "how should I price it", "how do I position this", "why isn't this selling", "run a WTP diagnosis", "/wtp-diagnose".
---

# Apply WTP skill

This skill runs a Willingness-to-Pay diagnosis on a product, campaign, or offer. WTP is a free, open-source framework that names the thirteen reasons people pay, the levers that intensify each one, the brakes that stop a purchase, and the price band a buyer will accept. The full framework is in this repository at `framework/wtp-framework.en.md` (and `.id.md` for Indonesian); the compact runnable spine is `AGENTS.md`.

Two honesty rules bind every diagnosis. Defend every driver with the removal test: a reason that, removed, would not stop the purchase is not the primary driver. And the framework has no validated measurement scale, so present a driver ranking as a hypothesis to test, never as a measured score.

## When this skill runs

Run it when a user asks, in any wording: why would anyone pay for this, what should I charge, how do I price this, how should I position or pitch it, why is this not selling, who is the buyer and what do they really want, or the explicit trigger `/wtp-diagnose`.

## How it runs, start to finish

Run the nine-step diagnostic method in order (full detail in `framework/wtp-framework.en.md` section 16). For an organization (B2B), run steps 3 through 8 once per buying-center role.

1. **Define the transaction.** Who pays whom for what, and in what currency: money, attention, data, or time.
2. **Name State A and State B** in the buyer's own words. Mark State A manifest (felt) or latent (real but unspoken).
3. **Find the primary driver** with the removal test. List two or three secondaries. Use the decision tree below to place the buyer.
4. **Check inhibitors.** Run the functional, psychological, and economic brake lists. Name the one or two strongest. A failing product usually fails here.
5. **Estimate the magnitude band.** Anchor on the buyer's reference price, not on cost.
6. **Locate the journey stage** (awareness, consideration, decision, onboarding, retention, advocacy); the leading driver and the right amplifiers differ by stage.
7. **Choose the value-proposition category** that matches the primary driver.
8. **Select two or three tactics**, matched to the stage and the dominant inhibitor. Respect the limit.
9. **Run the ethical check** (the Consumer Autonomy Test) before recommending anything to deploy.

### The decision tree (places the primary driver)

```
1. Escape something bad?  concrete problem -> Solve (Remedy) | threat -> Fear (Shield) | effort -> Convenience (Shortcut)
2. Reach something pleasurable?            -> Entertain (Experience)
3. Build or raise the self?  position -> Status (Signal) | capability -> Growth (Catalyst) | self-expression -> Identity (Canvas)
4. Manage others and conscience?  group -> Belonging (Tribe) | social debt -> Obligation (Protocol) | guilt -> Empathy (Cause) | moral value -> Values (Alignment)
5. Answer time and continuity pressure?  missing out -> FOMO (Access) | routine -> Habit (Subscription)
```

### The brakes to check (inhibitors)

- Functional: usage barrier, value barrier, risk barrier.
- Psychological: tradition barrier, image barrier, trust deficit, status-quo bias, choice overload.
- Economic: budget constraint, switching cost, perceived price unfairness, low urgency.

### The four product filters (is the gap worth building for)

Intensity (build only for urgent or above), frequency (monthly is the subscription sweet spot), alternatives (target no-solution or bad-solution markets), economics (positive margin). All four must pass.

### The ethics gate (mandatory)

Apply the Consumer Autonomy Test: would this person still buy if they fully understood how they were being influenced? If probably not, the combination is manipulation, and it should not ship. Avoid the red-zone combinations in `framework/wtp-framework.en.md` section 23 (Fear+shame, FOMO+scarcity in finance, Obligation+cancellation friction, Habit+lock-in).

## Output

Produce: the transaction in one line; State A and State B; the primary driver with its removal-test justification plus secondaries; the one or two strongest inhibitors; a realistic magnitude band; the value-proposition category and two or three tactics; an SCQA proposal opening answering the five positioning questions (section 18); and the Consumer Autonomy Test verdict. State the honest limit: the framework classifies more than it predicts, so the ranking is a hypothesis, not a measurement.

## What this skill loads

Load on demand: `AGENTS.md` for the compact spine, and `framework/wtp-framework.en.md` for the full per-driver detail, the amplifiers, the tactics, the dynamics, the context modifiers, and the citations. The `/wtp-diagnose` slash command runs this skill end to end on a described offer; its spec is in `commands/wtp-diagnose.md`.

## A note on trusting this skill

The framework is plain markdown you can read. It maps how persuasion works, which is also a map for manipulation, so it carries its own ethics gate. The skill instructs an agent only to reason about an offer you describe; it asks for nothing about your systems and sends nothing anywhere. If a forked copy ever instructs otherwise, treat it as tampered. See `SECURITY.md`.
