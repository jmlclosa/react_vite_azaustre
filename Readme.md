# Info
Project created following YT video from Carlos Azustre "REACT ⚛️ CURSO Práctico DESDE CERO - Desarrolla una app con React.js PASO A PASO"

https://www.youtube.com/watch?v=4AFOCAgywLc


# Getting started
## Setup project
```bash
lnvm # Load NVM
npm create vite@latest azaustre_react_vite -- --template react
cd azaustre_react_vite 
gh repo create react_vite_azaustre --public --source=.
```

* +info: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

Other utility:
* Babel.io tester online: https://babeljs.io/repl

## Clean project
we can remove files:
* App.css
* index.css
* logo.svg

Also we should clean main.jsx removing `import './index.css'` and changing App import to `import { App } from "./App"`

Finally, we can change App.jsx with only code:
```javascript
export function App() {
  return <div>Hello Juanma!</div>;
}
```

## Running in dev mode
1. Run `npm run dev`
2. Open http://localhost:3000/

It will be auto refreshed in Browser.