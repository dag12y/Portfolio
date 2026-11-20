export interface Study {
	slug: string;
	site?: string;
	name: string;
	field: string;
	problem: string;
	approach: string;
	stack: string[];
	flow: string[];
	challenge: string;
	implementation: string;
	decision: string;
	validation: string;
	limits: string;
	repo: string;
	revision: string;
	evidence: string;
}
export const studies: Study[] = [
	{
		slug: "devpulse",
		site: "https://devpulseanalytics.vercel.app/",
		name: "DevPulse",
		field: "Analytics infrastructure",
		problem:
			"Site owners need to understand traffic while respecting visitor privacy.",
		approach:
			"A TypeScript tracker sends page views to a Go API. A workspace dashboard turns stored events into traffic reports.",
		stack: ["Go", "PostgreSQL", "TypeScript", "Next.js", "Docker"],
		flow: ["Browser SDK", "Go API", "PostgreSQL"],
		challenge:
			"A browser can retry an event or leave mid-request. Counting the same event twice would distort reports.",
		implementation:
			"The SDK observes SPA navigation and uses sendBeacon with a fetch fallback. The API validates requests, filters bots and rate-limits by project and IP. It checks the origin and event ID before committing visitor, session and page-view records together. The Next.js dashboard reads project-scoped reports using workspace roles.",
		decision:
			"Keeping the event and its related records in one PostgreSQL transaction gives reports a consistent view. Configurable retention limits how far back a report can reach.",
		validation:
			"CI provisions PostgreSQL for integration tests and runs Go tests with the race detector. Tracker tests and a production image build cover separate delivery paths. The vulnerability scan is advisory.",
		limits:
			"Browser delivery is best effort. Measuring event loss during navigation and documenting retention behavior under load would be useful next steps.",
		repo: "https://github.com/dag12y/DevPulse",
		revision: "cc0b328",
		evidence: "services/api/internal/analytics/repository.go",
	},
	{
		slug: "saferun",
		site: "https://www.saferun.tech/",
		name: "SafeRun",
		field: "Developer tooling / Security",
		problem:
			"An npm dependency can run installation scripts before a developer has seen what they change.",
		approach:
			"A Go CLI rehearses installation in a disposable Docker workspace and uses the observed behavior to decide whether a host install can proceed.",
		stack: ["Go", "Docker", "npm"],
		flow: ["CLI", "Sandbox", "Risk policy"],
		challenge:
			"Translate filesystem, process and network observations into an installation decision a developer can understand.",
		implementation:
			"The sandbox drops Linux capabilities, sets no-new-privileges, uses a read-only root filesystem and limits CPU, memory and process count. Networking is configurable. Snapshot changes and runtime observations feed a risk report, with terminal and JSON output and local audit logging.",
		decision:
			"The policy allows low risk, requests confirmation at medium risk and blocks high or critical risk. Separating scoring from policy makes that decision reviewable. Backup, verification and rollback support the subsequent project installation.",
		validation:
			"Go test files cover sandbox configuration, filesystem snapshots, risk scoring, policy decisions, reports and package-manager rollback. This account describes the inspected source and test coverage.",
		limits:
			"Behavior observed during one installation cannot establish that a package is safe. Isolation also depends on Docker and host configuration. Documenting representative false positives would help developers interpret findings.",
		repo: "https://github.com/dag12y/saferun",
		revision: "8628add",
		evidence: "internal/policy/policy.go",
	},
	{
		slug: "ethionlp",
		name: "EthioNLP",
		field: "Language technology / Research",
		problem:
			"My research interest is language tooling for people working with Ethiopian languages, particularly Amharic and Tigrigna.",
		approach:
			"EthioNLP records that direction as an early project. Its public README currently describes the platform at a high level.",
		stack: ["Research concept"],
		flow: [],
		challenge:
			"Define one language task and a reproducible way to evaluate its output.",
		implementation:
			"Implementation details are pending a public source release.",
		decision:
			"A candidate first milestone is to choose one task, document the input data and establish a baseline before comparing models.",
		validation:
			"The inspected revision contains a README and license. No public tests, evaluation data or model results are available for review.",
		limits:
			"Architecture, dataset provenance, language coverage and evaluation criteria still need documentation.",
		repo: "https://github.com/dag12y/ethionlp",
		revision: "f77b9e5",
		evidence: "README.md",
	},
];
