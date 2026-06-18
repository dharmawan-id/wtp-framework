/*
  WTP (Willingness-to-Pay) framework engine for the MCP server.
  Single source of the diagnostic logic served to a coding agent or strategist.
  Pure functions, no dependencies. The canonical prose is /framework/wtp-framework.en.md
  (and .id.md); the web tool's data is /assets/data/framework.js. The drift-check
  (scripts/check-drift.mjs) keeps the cluster and driver identities here in parity
  with the web tool data, so the two code representations cannot diverge silently.
*/

const REPO = "https://github.com/dharmawan-id/wtp-framework";

// The five clusters (fast triage). Lossy on purpose: a starting guess that a real
// diagnosis returns from to the full thirteen drivers.
export const CLUSTERS = [
  { id: "relieve", label: "Relieve", goal: "escape a bad, risky, or effortful state", drivers: ["solve", "fear", "convenience"] },
  { id: "enjoy", label: "Enjoy", goal: "reach a pleasurable state", drivers: ["entertain"] },
  { id: "become", label: "Become", goal: "construct or elevate the self", drivers: ["status", "growth", "identity"] },
  { id: "belong", label: "Belong", goal: "manage bonds, standing, and conscience with others", drivers: ["belonging", "obligation", "empathy", "values"] },
  { id: "keepup", label: "Keep up", goal: "answer pressure from time and continuity", drivers: ["fomo", "habit"] }
];

// The thirteen drivers. vp = value-proposition category, the supply-side framing.
export const DRIVERS = {
  solve:       { name: "Solve",       cluster: "relieve", vp: "Remedy",       ask: "a concrete, named problem they want fixed",        tactics: ["outcome visualization", "risk reversal"],            message: "Name the exact problem, then show it gone." },
  fear:        { name: "Fear",        cluster: "relieve", vp: "Shield",       ask: "a threat or risk they want protection from",         tactics: ["authority transfer", "social proof"],               message: "Make the threat vivid, then make the protection credible." },
  convenience: { name: "Convenience", cluster: "relieve", vp: "Shortcut",     ask: "effort, time, or complexity they want gone",         tactics: ["effort contrast", "default architecture"],          message: "Contrast the hard old way with the effortless new one." },
  entertain:   { name: "Entertain",   cluster: "enjoy",   vp: "Experience",   ask: "pleasure, stimulation, or escape",                   tactics: ["sensory optimization", "curiosity gap"],            message: "Lead with the feeling, let the product fade behind it." },
  status:      { name: "Status",      cluster: "become",  vp: "Signal",       ask: "position and recognition relative to others",        tactics: ["exclusivity design", "social comparison"],          message: "Make the signal legible to the people whose opinion they want." },
  growth:      { name: "Growth",      cluster: "become",  vp: "Catalyst",     ask: "becoming more capable or developed",                 tactics: ["hope and anticipation", "outcome visualization"],   message: "Show the future self, and make the path feel achievable." },
  identity:    { name: "Identity",    cluster: "become",  vp: "Canvas",       ask: "expressing who they actually are",                   tactics: ["identity narrative", "IKEA effect"],                message: "Reflect the identity back, let them co-create it." },
  belonging:   { name: "Belonging",   cluster: "belong",  vp: "Tribe",        ask: "joining or staying in a group",                      tactics: ["community building", "social proof"],               message: "Show the group, and make the door open." },
  obligation:  { name: "Obligation",  cluster: "belong",  vp: "Protocol",     ask: "repaying a social debt",                             tactics: ["reciprocity", "relationship framing"],              message: "Give first, then make reciprocation easy and visible." },
  empathy:     { name: "Empathy",     cluster: "belong",  vp: "Cause",        ask: "relieving guilt over others' suffering",             tactics: ["outcome visualization", "proximity of need"],       message: "Make the help concrete and the recipient close." },
  values:      { name: "Values",      cluster: "belong",  vp: "Alignment",    ask: "acting on a moral or ethical value",                 tactics: ["authority transfer", "values framing"],             message: "Prove the value is real, not painted on." },
  fomo:        { name: "FOMO",        cluster: "keepup",  vp: "Access",       ask: "fear of missing out",                                tactics: ["exclusivity and scarcity", "anchoring"],            message: "Make the window real and the missing-out concrete." },
  habit:       { name: "Habit",       cluster: "keepup",  vp: "Subscription", ask: "continuing an established routine",                   tactics: ["default architecture", "switching-cost design"],    message: "Win the routine early; change context, not emotion." }
};

// Journey stages tilt which amplifiers to deploy.
export const STAGES = {
  awareness:     "Curiosity, envy, mild shame",
  consideration: "Hope, pride, nostalgia",
  decision:      "Anchoring, accumulation, anticipated regret",
  onboarding:    "Hope, curiosity",
  retention:     "Love, guilt, anticipated regret",
  advocacy:      "Pride, love"
};

// Demand-side brakes. If a product is failing, the answer is usually here.
export const INHIBITORS = {
  functional: ["Usage barrier (forces a behavior change)", "Value barrier (gain over current is too small)", "Risk barrier (perceived risk of adopting)"],
  psychological: ["Tradition barrier (clashes with norms)", "Image barrier (unfavorable association)", "Trust deficit (does not believe you deliver)", "Decision inertia and status-quo bias", "Choice overload"],
  economic: ["Liquidity or budget constraint", "Incumbent switching cost", "Perceived price unfairness", "Timing and low urgency"]
};

// Magnitude: how much, not only whether.
export const MAGNITUDE = [
  "Anchor on the buyer's reference price, not your cost.",
  "Respect the income and budget ceiling.",
  "Fewer perceived alternatives widen the acceptable range.",
  "Where quality is hard to judge, price signals quality.",
  "A price that breaks a fairness norm is resisted even when affordable.",
  "Reduce the risk discount with guarantees and proof."
];

// The nine-step diagnostic method (section 16).
export const STEPS = [
  "Define the transaction: who pays whom for what, and in what currency (money, attention, data, time).",
  "Name State A and State B in the buyer's own words; mark whether State A is manifest or latent.",
  "Find the primary driver with the removal test: which single reason, if absent, kills the purchase? List two or three secondaries.",
  "Check inhibitors: run the functional, psychological, and economic lists; name the one or two strongest brakes.",
  "Estimate the magnitude band from the buyer's reference price, not from cost.",
  "Locate the journey stage; the leading driver and the right amplifiers differ by stage.",
  "Choose the value-proposition category that matches the primary driver.",
  "Select two or three tactics matched to the stage and the dominant inhibitor (respect the two-to-three limit).",
  "Run the ethical check: apply the Consumer Autonomy Test before deploying anything."
];

// The four product filters (section 17). All four must pass.
export const FILTERS = [
  "Intensity: how painful is State A? Build only for urgent or above (desperate supports premium pricing).",
  "Frequency: how often is State A felt? Monthly is the subscription sweet spot; daily plus urgent is the strongest combination.",
  "Alternatives: how well do existing solutions move A to B? Target no solution or bad solutions; do not enter against excellent ones.",
  "Economics: can State B be delivered at a positive margin? Account for development, marginal, acquisition cost, and lifetime value."
];

// The five proposal questions (section 18); they map onto an SCQA opening.
export const POSITIONING = [
  "Which undesired state do we remove, or which desired state do we create? (why the audience cares)",
  "How do we move them from A to B? (the mechanism)",
  "Why are we the ones who can be trusted to do it? (credibility, answers the trust inhibitor)",
  "Is the value of the transition larger than the price we ask? (value vs price, answers magnitude and fairness)",
  "Why now? (urgency, answers the timing inhibitor)"
];

// B2B organizational overlay.
export const B2B = "Organizational buy: map the buying center (user, influencer, decider, procurement, gatekeeper, champion) and write one message per role. The decider's leading driver is usually Fear, expressed as career risk and defensibility. The strongest brakes are trust deficit, switching cost, and the status-quo default. Run the diagnosis once per role.";

// The ethical gate (section 23), always shown.
export const ETHIC = {
  test: "Consumer Autonomy Test: would this person still buy if they fully understood how they were being influenced? If probably not, the combination has crossed from persuasion into manipulation. Do not ship it.",
  redzones: [
    "Fear + shame + deficit exposure (health, insurance): exploits anxiety to sell possibly unnecessary protection.",
    "FOMO + envy + scarcity (investment, crypto): triggers impulsive financial decisions under manufactured urgency.",
    "Obligation + guilt + cancellation friction (subscription retention): traps people in unwanted subscriptions.",
    "Habit + switching-cost architecture + accumulated-value display (platforms): builds dependency in place of value."
  ]
};

const driverLine = (id) => {
  const d = DRIVERS[id];
  return "  " + d.name + " -> VP " + d.vp + " -> ask: " + d.ask + " -> tactics: " + d.tactics.join(", ") + "\n    message: " + d.message;
};

// diagnose(opts) -> { text, prompt }
// opts: { offer?, cluster?, b2b?, stage? }. Deterministic where the framework is
// deterministic (the data, the decision tree, the steps); the judgment (read State
// A/B, run the removal test) is handed to the calling agent via the prompt.
export function diagnose(opts = {}) {
  const offer = (opts.offer || "").trim();
  const cl = CLUSTERS.find((c) => c.id === opts.cluster);
  const stage = opts.stage && STAGES[opts.stage] ? opts.stage : null;
  const b2b = !!opts.b2b;

  const offerLine = offer ? offer : "(not specified: state who pays whom for what)";
  const contextLine = b2b ? "B2B organizational buy" : "B2C / individual buy";
  const stageLine = stage ? (stage + " (amplifiers: " + STAGES[stage] + ")") : "not specified";

  const candidateBlock = cl
    ? ("Fast-triage cluster: " + cl.label + " (" + cl.goal + ").\nCandidate drivers to test in this cluster:\n" + cl.drivers.map(driverLine).join("\n"))
    : ("No cluster picked. Run the decision tree from the top:\n" + CLUSTERS.map((c) => "  " + c.label + " -> " + c.goal + " -> drivers: " + c.drivers.map((d) => DRIVERS[d].name).join(", ")).join("\n") + "\nThen open the chosen cluster's drivers.");

  const stepsBlock = STEPS.map((s, i) => "  " + (i + 1) + ". " + s).join("\n");
  const filtersBlock = FILTERS.map((f) => "  - " + f).join("\n");
  const inhBlock = "  Functional: " + INHIBITORS.functional.join("; ") + "\n  Psychological: " + INHIBITORS.psychological.join("; ") + "\n  Economic: " + INHIBITORS.economic.join("; ");
  const magBlock = MAGNITUDE.map((m) => "  - " + m).join("\n");
  const posBlock = POSITIONING.map((q, i) => "  " + (i + 1) + ". " + q).join("\n");
  const redBlock = ETHIC.redzones.map((r) => "  - " + r).join("\n");

  const text =
    "WTP diagnosis scaffold\n======================\n\n" +
    "Offer: " + offerLine + "\n" +
    "Context: " + contextLine + "    Journey stage: " + stageLine + "\n\n" +
    "Nine-step diagnostic method (run in order):\n" + stepsBlock + "\n\n" +
    candidateBlock + "\n\n" +
    "Four product filters (all must pass to be worth building):\n" + filtersBlock + "\n\n" +
    "Inhibitors, name the one or two strongest brakes:\n" + inhBlock + "\n\n" +
    "Magnitude, set the price band:\n" + magBlock + "\n\n" +
    "Proposal questions (map onto an SCQA opening):\n" + posBlock + "\n\n" +
    (b2b ? ("B2B overlay:\n  " + B2B + "\n\n") : "") +
    "Ethics gate (mandatory before deploying):\n  " + ETHIC.test + "\n  Red-zone combinations to avoid:\n" + redBlock;

  const prompt =
    "Run a Willingness-to-Pay diagnosis on this offer using the WTP framework at " + REPO + " (read framework/wtp-framework.en.md, or AGENTS.md, for the full method).\n\n" +
    "Offer: " + offerLine + "\nContext: " + contextLine + (stage ? ("\nJourney stage: " + stage) : "") + (cl ? ("\nFast-triage cluster (a starting guess only): " + cl.label) : "") + "\n\n" +
    "Produce, in order: (1) the transaction in one line; (2) State A and State B in the buyer's words, each marked manifest or latent; (3) the primary driver justified by the removal test, plus two or three secondaries; (4) the one or two strongest inhibitors with why; (5) a realistic magnitude band anchored on the buyer's reference price; (6) the value-proposition category and two or three tactics matched to the stage and the dominant inhibitor; (7) an SCQA proposal opening answering the five positioning questions; (8) the Consumer Autonomy Test verdict and a check against the red-zone combinations. " +
    (b2b ? "Because this is an organizational buy, run steps 3 through 6 once per buying-center role (user, influencer, decider, procurement, gatekeeper, champion). " : "") +
    "Do not assign a driver you cannot defend with the removal test. The framework classifies more than it predicts: treat any driver ranking as a hypothesis, not a measurement, and do not claim a validated score.";

  return { text, prompt };
}
