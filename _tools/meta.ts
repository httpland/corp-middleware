import { BuildOptions } from "https://deno.land/x/dnt@0.33.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@httpland/corp-middleware",
    version,
    description: "HTTP cross-origin resource policy(CORP) middleware",
    keywords: [
      "http",
      "middleware",
      "header",
      "corp",
      "cross-origin-resource-policy",
      "cross-origin",
      "same-origin",
      "same-site",
      "security",
      "fetch-api",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/corp-middleware",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/corp-middleware.git",
    },
    bugs: {
      url: "https://github.com/httpland/corp-middleware/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: {
      access: "public",
    },
  },
  packageManager: "pnpm",
  mappings: {
    "https://deno.land/x/http_middleware@1.0.0/mod.ts": {
      name: "@httpland/http-middleware",
      version: "1.0.0",
    },
    "https://deno.land/x/http_utils@1.0.0/message.ts": {
      name: "@httpland/http-utils",
      version: "1.0.0",
      subPath: "message.js",
    },
  },
});
