import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwind from "@tailwindcss/vite";
import { studies } from "./src/data/studies";
export default defineConfig({
	plugins: [
		react(),
		tailwind(),
		{
			name: "project-documents",
			enforce: "post",
			generateBundle(_, bundle) {
				const home = bundle["index.html"];
				if (home?.type !== "asset") this.error("Missing homepage HTML");
				for (const s of studies) {
					const title = s.name + " | Dagm Yibabe Girma";
					const html = String(home.source)
						.replace(/<title>.*?<\/title>/, "<title>" + title + "</title>")
						.replace(/(name="description" content=")[^"]+/, "$1" + s.problem)
						.replace(/(property="og:title" content=")[^"]+/, "$1" + title)
						.replace(
							/(property="og:description" content=")[^"]+/,
							"$1" + s.problem,
						);
					this.emitFile({
						type: "asset",
						fileName: "projects/" + s.slug + "/index.html",
						source: html,
					});
				}
			},
		},
	],
	build: { outDir: "build" },
	server: { port: 3000 },
});
