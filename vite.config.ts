


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { EsLinter, linterPlugin }  from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
import copy from "rollup-plugin-copy";
import { resolve } from "node:path";
// const = EsLint;
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ["src/lib/"],
    }),
    copy({
      targets: [{ src: "src/lib/constants/colors.scss", dest: "dist" }],
      hook: 'writeBundle'
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "lib/index.tsx"),
      name: "mylibrarycontainer",
      formats: ["es", "umd"],
      fileName: (format) => `mylibrarycontainer.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
