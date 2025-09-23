import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === "library";

  if (isLibrary) {
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.tsx"),
          name: "ReactKeyboard",
          formats: ["es", "umd"],
          fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    server: {
      port: 3333,
    },
    build: {
      outDir: "dist-demo",
    },
  };
});
