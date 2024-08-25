// build.js
const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./ts/init.ts"],
		bundle: true,
		outfile: "./js/init.js",
		format: "esm",
	})
	.catch(() => process.exit(1));
