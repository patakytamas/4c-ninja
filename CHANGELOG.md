# Stack
https://www.skeleton.dev
https://stwui.vercel.app
https://pocketbase.io

```bash
# Create turborepo
npx degit vercel/turbo/examples/with-svelte mesterconsulting
cd with-svelte
pnpm install
git init . && git add . && git commit -m "Init"

# Create car-register app
cd apps
npm create skeleton-app@latest car-register

# Add repo
git remote add origin https://github.com/patakytamas/mesterconsulting.git
git push -u origin main

pnpm add -D stwui @repo/ui @repo/config @repo/shared --filter="car-register"
pnpm add -D @sveltejs/adapter-node --filter="car-register"

pnpm add -D stwui @skeletonlabs/skeleton @repo/config @repo/shared --filter="ui"

pnpm add -D pocketbase @repo/shared --filter="config"
```