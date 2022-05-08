import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	site: "https://silea.dev",
	integrations: [
		critters({
			preload: "body",
			inlineFonts: true,
		}),
		compress(),
	],
});
