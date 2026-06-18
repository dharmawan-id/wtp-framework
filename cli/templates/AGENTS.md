# AGENTS.md: WTP (Willingness-to-Pay) framework

This is the drop-in entrypoint. If you are an AI agent and this file is in the project you are working on, the person here wants you to use the Willingness-to-Pay framework: to diagnose why someone would pay for an offer, how to price it, how to position it, and where the brakes are. Run the diagnosis from this file. Each section links to the full framework under `framework/wtp-framework.en.md` (and `.id.md` for Indonesian) for the complete reasoning, the citations, and the worked examples.

This file is the runnable spine. It carries the method in compact form so you can run a diagnosis from here alone. Read the linked framework for any part you need to go deep on. The framework classifies more than it predicts: it explains why people pay better than it forecasts whether a specific person will. Treat every driver assignment as a hypothesis you must defend, never as a measured score.

A note for the person who owns this app: the WTP framework is free and open-source, it is plain markdown you can read yourself, and the tools it ships only read the framework and compute a diagnosis plan locally. They make no network calls and ask for nothing about your business.

---

## What WTP does

People pay to move from an undesired state (State A) to a desired one (State B). The framework names the thirteen reasons that move is worth paying for, the levers that intensify each reason, the brakes that stop a purchase, and the price band a buyer will accept. It turns "why would anyone pay for this" into a repeatable diagnosis instead of a guess.

Two honesty rules run through every diagnosis. First, defend every driver with the removal test: if a reason, taken away, would not stop the purchase, it is not the primary driver. A pile of plausible reasons is not a diagnosis. Second, the framework has no validated measurement scale. The self-report items in section 21 are structured interview prompts, not a tested instrument, so a driver ranking is a hypothesis to test, not a number to trust.

---

## How to run a diagnosis

Nine steps, in order (framework section 16). For an organization, run steps 3 through 8 once per buying-center role.

1. **Define the transaction.** Who pays whom for what, and in what currency: money, attention, data, or time.
2. **Name State A and State B** in the buyer's own words. Mark whether State A is manifest (the buyer feels it) or latent (real but unspoken).
3. **Find the primary driver** with the removal test: which single reason, if absent, kills the purchase? List two or three secondaries that raise willingness to pay.
4. **Check inhibitors.** Run the functional, psychological, and economic lists below. Name the one or two strongest brakes. If a product is failing, the answer is usually here.
5. **Estimate the magnitude band.** Anchor on the buyer's reference price, not on your cost.
6. **Locate the journey stage.** The leading driver and the right amplifiers differ by stage.
7. **Choose the value-proposition category** that matches the primary driver.
8. **Select two or three tactics**, matched to the stage and the dominant inhibitor. Respect the limit; more is not better.
9. **Run the ethical check.** Apply the Consumer Autonomy Test before deploying anything.

---

## The five clusters (fast triage)

The thirteen drivers compress into five clusters for a fast read. A cluster is a starting guess; a real diagnosis returns to the full thirteen.

- **Relieve** (Solve, Fear, Convenience): escape a bad, risky, or effortful state.
- **Enjoy** (Entertain): reach a pleasurable state.
- **Become** (Status, Growth, Identity): construct or elevate the self.
- **Belong** (Belonging, Obligation, Empathy, Values): manage bonds, standing, and conscience with others.
- **Keep up** (FOMO, Habit): answer pressure from time and continuity.

## The decision tree

```
START: What is the buyer mainly trying to do?

1. Escape something bad?
   - A concrete, named problem?      -> Solve       -> Remedy       -> outcome visualization, risk reversal
   - A threat or risk they fear?     -> Fear        -> Shield       -> authority transfer, social proof
   - Effort, time, or complexity?    -> Convenience -> Shortcut     -> effort contrast, default architecture
2. Reach something pleasurable?      -> Entertain   -> Experience   -> sensory optimization, curiosity gap
3. Build or raise the self?
   - Position relative to others?    -> Status      -> Signal       -> exclusivity, social comparison
   - Become more capable?            -> Growth      -> Catalyst     -> hope, outcome visualization
   - Express who they are?           -> Identity    -> Canvas       -> identity narrative, IKEA effect
4. Manage others and conscience?
   - Join or stay in a group?        -> Belonging   -> Tribe        -> community, social proof
   - Repay a social debt?            -> Obligation  -> Protocol     -> reciprocity, relationship framing
   - Relieve guilt over suffering?   -> Empathy     -> Cause        -> outcome visualization, proximity
   - Act on a moral value?           -> Values      -> Alignment    -> authority transfer, values framing
5. Answer time and continuity pressure?
   - Afraid of missing out?          -> FOMO        -> Access       -> exclusivity, scarcity, anchoring
   - Continue an established routine? -> Habit       -> Subscription -> default architecture, switching cost

THEN, regardless of branch:
   - Identify the 1 or 2 strongest inhibitors (functional, psychological, economic).
   - Set the magnitude band from the buyer's reference price, not cost.
   - Run the Consumer Autonomy Test before deploying.
```

The value-proposition category (Remedy, Shield, Shortcut, and so on) is the supply-side framing that matches the driver. The two tactics after each are a starting pair, not the whole toolkit (section 8 has all twenty-six). The full per-driver detail, including State A and State B for each, is in framework section 2.4.

---

## The inhibitors (demand-side brakes)

Name the one or two strongest. A failing product usually fails here, not on the driver.

- **Functional:** usage barrier (forces a behavior change), value barrier (gain over the current option is too small), risk barrier (adopting feels risky).
- **Psychological:** tradition barrier (clashes with norms), image barrier (unfavorable association), trust deficit (does not believe you deliver), decision inertia and status-quo bias, choice overload.
- **Economic:** liquidity or budget constraint, incumbent switching cost, perceived price unfairness, timing and low urgency.

## Magnitude (how much, not only whether)

- Anchor on the buyer's reference price, not your cost.
- Respect the income and budget ceiling.
- Fewer perceived alternatives widen the acceptable range.
- Where quality is hard to judge, price signals quality.
- A price that breaks a fairness norm is resisted even when affordable.
- Reduce the risk discount with guarantees and proof.

## The journey stage tilts the amplifiers

Awareness (curiosity, envy, mild shame), consideration (hope, pride, nostalgia), purchase decision (anchoring, accumulation, anticipated regret), onboarding (hope, curiosity), retention (love, guilt, anticipated regret), advocacy (pride, love). The primary driver can shift across the journey; diagnose for the stage you are designing.

---

## The four product filters

A real State A to State B gap is necessary but not sufficient. All four must pass before a gap is worth building for (section 17).

- **Intensity:** how painful is State A? Build only for urgent or above; desperate supports premium pricing.
- **Frequency:** how often is State A felt? Monthly is the subscription sweet spot; daily plus urgent is the strongest combination.
- **Alternatives:** how well do existing solutions move A to B? Target no solution or bad solutions; do not enter against excellent ones.
- **Economics:** can State B be delivered at a positive margin, accounting for development, marginal, acquisition cost, and lifetime value?

## The proposal questions

A state-transition answers why the buyer cares and leaves four questions open. A complete proposal answers all five, and they map onto an SCQA opening (section 18).

1. Which undesired state do we remove, or which desired state do we create? (why they care)
2. How do we move them from A to B? (the mechanism)
3. Why are we the ones to be trusted with it? (credibility, answers the trust inhibitor)
4. Is the value of the transition larger than the price? (value vs price, answers magnitude and fairness)
5. Why now? (urgency, answers the timing inhibitor)

## B2B and organizational buying

Map the buying center (user, influencer, decider, procurement, gatekeeper, champion) and write one message per role. The decider's leading driver is usually Fear, expressed as career risk and defensibility. The strongest brakes are trust deficit, switching cost, and the status-quo default. Run steps 3 through 8 once per role (section 12).

---

## Ethical guardrails (read before deploying)

The framework maps psychological vulnerabilities, the levers that intensify them, and the actions that pull those levers. That is also a map for manipulation. The difference is intent and transparency.

**The Consumer Autonomy Test.** Before deploying any driver, amplifier, and tactic combination, ask: would this person still buy if they fully understood how they were being influenced? If the honest answer is probably not, the combination has crossed from persuasion into manipulation, and it should not ship.

**Red-zone combinations to avoid:**

- Fear + shame + deficit exposure (health, insurance): exploits anxiety to sell possibly unnecessary protection.
- FOMO + envy + scarcity (investment, crypto): triggers impulsive financial decisions under manufactured urgency.
- Obligation + guilt + cancellation friction (subscription retention): traps people in unwanted subscriptions.
- Habit + switching-cost architecture + accumulated-value display (platforms): builds dependency in place of value.

Several markets are moving toward stricter enforcement against manipulative design, so the red zones are a commercial risk as well as an ethical one.

---

## The honest limits (read this before trusting a diagnosis)

The framework classifies more than it predicts. It explains why people paid better than it forecasts whether they will. It does not predict the exact amount a specific person will pay, which of two matched competitors a buyer chooses, or how drivers evolve as a category matures. A user who needs those needs a different tool. Name the limit in any output, and present a driver ranking as a hypothesis to test, never as a measured result.

The full framework, with the amplifiers, the tactics, the dynamics, the context modifiers, the measurement instrument, and the citations, is in `framework/wtp-framework.en.md`. The Indonesian version is in `framework/wtp-framework.id.md`. The sources are in `framework/sources.md`.
