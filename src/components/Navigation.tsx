import { useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function Navigation() {
	const [light, setLight] = useState(
		document.documentElement.dataset.theme === "light",
	);
	function toggle() {
		const value = light ? "dark" : "light";
		document.documentElement.dataset.theme = value;
		setLight(!light);
		try {
			localStorage.setItem("theme", value);
		} catch {
			/* Storage is optional. */
		}
	}
	return (
		<header>
			<nav className="wrap">
				<a href="/" className="brand">
					<b aria-hidden="true">dg</b>Dagm Girma
				</a>
				<div className="navlinks">
					<a href="/#work">Work</a>
					<a href="/#background">Background</a>
					<a href="/#contact">Contact</a>
					<button
						type="button"
						onClick={toggle}
						aria-label={light ? "Use dark theme" : "Use light theme"}
					>
						{light ? <Moon size={18} /> : <Sun size={18} />}
					</button>
				</div>
			</nav>
		</header>
	);
}
