import { studies, type Study } from "../data/studies";
export function Flow({ study }: { study: Study }) {
	return (
		<div className="flow">
			{study.flow.length
				? study.flow.map((node, i) => (
						<span key={node}>
							{i > 0 ? "→ " : ""}
							{node}
						</span>
					))
				: "Architecture pending documentation"}
		</div>
	);
}
export default function Projects() {
	return (
		<section id="work" className="block">
			<p className="kicker">Selected work</p>
			<h2>Engineering projects</h2>
			<div className="cards">
				{studies.map((s) => (
					<article key={s.slug} className="project">
						<span className="kicker">{s.field}</span>
						<h3>{s.name}</h3>
						<p>{s.problem}</p>
						<Flow study={s} />
						<p>{s.approach}</p>
						<p className="mt-4">
							<strong>Challenge</strong> · {s.challenge}
						</p>
						<div className="tags">{s.stack.join(" / ")}</div>
						<div className="actions">
							<a href={`/projects/${s.slug}/`}>Case study →</a>
							<a href={s.repo}>GitHub ↗</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
