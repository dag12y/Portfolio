import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CaseStudy from "./components/CaseStudy";
import { studies } from "./data/studies";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
	const path = location.pathname.replace(/\/+$/, "");
	const study = studies.find((s) => path === `/projects/${s.slug}`);
	return (
		<>
			<a className="skip" href="#main">
				Skip to content
			</a>
			<Navigation />
			<main className="wrap" id="main">
				{study ? (
					<CaseStudy study={study} />
				) : path === "" ? (
					<Home />
				) : (
					<section className="case">
						<h1>Page not found</h1>
						<a href="/">Return home</a>
					</section>
				)}
			</main>
			<footer>
				<div className="wrap">Dagm Yibabe Girma · Addis Ababa, Ethiopia</div>
			</footer>
			<Analytics />
		</>
	);
}
