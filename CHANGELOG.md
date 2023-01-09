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

pnpm add -D pocketbase stwui --filter="car-register"

```