import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	site: "https://silea.dev",
	experimental: {
		integrations: true,
	},
	integrations: [critters(), compress()],
});
