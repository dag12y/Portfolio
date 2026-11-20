import { useEffect } from "react";
import type { Study } from "../data/studies";
import { Flow } from "./Projects";
export default function CaseStudy({ study: s }: { study: Study }) {
	useEffect(() => {
		document.title = `${s.name} | Dagm Yibabe Girma`;
		document
			.querySelector('meta[name="description"]')
			?.setAttribute("content", s.problem);
	}, [s]);
	return (
		<article className="case">
			<a href="/#work">← Selected work</a>
			<p className="kicker mt-8">{s.field}</p>
			<h1>{s.name}</h1>
			<p className="intro">{s.approach}</p>
			<div className="tags">{s.stack.join(" / ")}</div>
			<h2>Problem and motivation</h2>
			<p>{s.problem}</p>
			<h2>Key engineering challenge</h2>
			<p>{s.challenge}</p>
			<h2>Architecture</h2>
			<Flow study={s} />
			{[
				["Implementation", s.implementation],
				["Design decisions and trade-offs", s.decision],
				["Testing and validation", s.validation],
				["Limitations and next steps", s.limits],
			].map(([label, body]) => (
				<section key={label}>
					<h2>{label}</h2>
					<p>{body}</p>
				</section>
			))}
			<div className="actions">
				<a className="primary" href={s.repo}>
					GitHub repository ↗
				</a>
				<a href={`${s.repo}/blob/${s.revision}/${s.evidence}`}>
					Inspect source ↗
				</a>
				{s.site && <a href={s.site}>Project website ↗</a>}
			</div>
		</article>
	);
}
