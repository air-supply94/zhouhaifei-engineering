{
  "extends": "@zhouhaifei/code-style/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "lib": ["esnext", "dom"],
    "baseUrl": "."
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src", "bundlerConfig.ts", "tailwind.config.ts", "types/*.d.ts"]
}
