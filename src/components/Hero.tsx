import Architecture from "./Architecture";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";
export default function Hero() {
	return (
		<section className="hero">
			<div>
				<p className="kicker">Backend / Software Engineer</p>
				<h1>
					Building reliable software<span>, from APIs to infrastructure.</span>
				</h1>
				<p className="intro">
					I’m Dagm Yibabe Girma, an engineering student in Addis Ababa. I build
					backend systems and developer tools with Go, TypeScript, PostgreSQL
					and Docker.
				</p>
				<div className="actions">
					<a className="primary" href="#work">
						View projects <ArrowDown size={16} />
					</a>
					<a href={profile.github}>GitHub ↗</a>
					<a href={profile.resume}>
						Résumé <ArrowUpRight size={14} />
					</a>
				</div>
			</div>
			<Architecture />
		</section>
	);
}
