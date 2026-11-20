import Hero from "./Hero";
import Projects from "./Projects";
import { profile } from "../data/content";
const skills = [
	["Languages", "Go, TypeScript, JavaScript, Python, Java, SQL"],
	["Backend", "Go, Node.js, Express, Django, FastAPI"],
	["Data", "PostgreSQL, MongoDB, MySQL"],
	["Infrastructure", "Docker, Docker Compose, Nginx"],
	["Interfaces", "React, Next.js, Tailwind CSS"],
	["AI / ML", "PyTorch, scikit-learn, NumPy, pandas"],
];
export default function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<section className="block split">
				<div>
					<p className="kicker">Engineering expertise</p>
					<h2>Tools I work with</h2>
				</div>
				<dl>
					{skills.map(([area, tools]) => (
						<div className="row" key={area}>
							<dt>{area}</dt>
							<dd className="muted">{tools}</dd>
						</div>
					))}
				</dl>
			</section>
			<section id="background" className="block split">
				<div>
					<p className="kicker">Background</p>
					<h2>About me</h2>
				</div>
				<p className="intro">
					I’m Dagm Yibabe Girma, an Electrical and Computer Engineering
					undergraduate in Addis Ababa. I’m interested in the decisions behind a
					backend service: which data to keep, how to handle a retry, and where
					to draw a trust boundary. My projects explore those questions through
					analytics, developer tools and applied AI.
				</p>
			</section>
			<section className="block split">
				<h2>Experience &amp; education</h2>
				<div>
					<div className="row">
						<strong>iCog Labs</strong>
						<p className="muted">AI research-oriented internship work</p>
					</div>
					<div className="row">
						<strong>Addis Ababa University · AAiT</strong>
						<p className="muted">
							Electrical and Computer Engineering undergraduate
							<br />
							Expected graduation · June 2028
						</p>
					</div>
				</div>
			</section>
			<section className="block split" id="contact">
				<div>
					<p className="kicker">Contact</p>
					<h2>Get in touch</h2>
				</div>
				<div>
					<p className="intro">
						For backend engineering opportunities and project collaborations,
						reach me by email.
					</p>
					<div className="actions">
						<a className="primary" href={`mailto:${profile.email}`}>
							Email Dagm ↗
						</a>
						<a href={profile.linkedin}>LinkedIn ↗</a>
						<a href={profile.resume}>Résumé ↗</a>
					</div>
				</div>
			</section>
		</>
	);
}
