import { defineConfig } from "astro/config";
import critters from "astro-critters";

export default defineConfig({
	site: "https://silea.dev",
	integrations: [
		critters({
			preload: "body",
			inlineFonts: true,
		}),
	],
});
