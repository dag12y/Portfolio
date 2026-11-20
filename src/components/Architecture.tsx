import { useState } from "react";
import { Monitor, Network, Layers3, Database } from "lucide-react";

const stages = [
	{
		name: "Client",
		icon: Monitor,
		detail:
			"The client turns a user action into an HTTP request and presents the response.",
	},
	{
		name: "API",
		icon: Network,
		detail:
			"The API authenticates the caller, validates input and routes the request.",
	},
	{
		name: "Services",
		icon: Layers3,
		detail:
			"Services apply domain rules and coordinate the work needed to answer the request.",
	},
	{
		name: "Database",
		icon: Database,
		detail:
			"The database keeps durable records and commits related changes together.",
	},
];

export default function Architecture() {
	const [active, select] = useState(1);
	return (
		<figure className="diagram">
			<figcaption>
				<span className="signal" /> Request lifecycle <small>FIG. 01</small>
			</figcaption>
			<div className="canvas">
				<svg
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<path d="M24 25 H76 V75 H24" />
				</svg>
				{stages.map(({ name, icon: Icon }, i) => (
					<button
						key={name}
						type="button"
						aria-pressed={active === i}
						onClick={() => select(i)}
					>
						<Icon size={22} />
						<span>{name}</span>
					</button>
				))}
			</div>
			<div className="readout" aria-live="polite">
				<span className="kicker">
					Conceptual system / {stages[active].name}
				</span>
				<p>{stages[active].detail}</p>
			</div>
		</figure>
	);
}
