import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPresetEnv({
          stage: 3,
        }),
      ],
    },
  },
});
