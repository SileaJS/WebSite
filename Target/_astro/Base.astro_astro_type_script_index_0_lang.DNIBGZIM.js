const p = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	c = {},
	f = function (l, a, b) {
		let i = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			i = Promise.all(
				a.map((e) => {
					if (((e = h(e)), e in c)) return;
					c[e] = !0;
					const s = e.endsWith(".css"),
						d = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${d}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = s ? "stylesheet" : p),
						s || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						s)
					)
						return new Promise((u, m) => {
							t.addEventListener("load", u),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return i
			.then(() => l())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
(
	await f(async () => {
		const { initializeApp: o } = await import("./index.esm.CQlgJgN2.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyBb9d0h1NOUqhPcJKkomUpwvdXa7C6bO28",
	authDomain: "sileajs.firebaseapp.com",
	databaseURL: "https://sileajs.firebaseio.com",
	projectId: "sileajs",
	storageBucket: "sileajs.appspot.com",
	messagingSenderId: "427173895301",
	appId: "1:427173895301:web:7850aa63dccb907e17ddec",
	measurementId: "G-1SDRRZYV8C",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.DNIBGZIM.js.map
