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


# Following commits to see steps :)

# Aplicando diseño!

(!) La libreria de Chakra-ui no es compatible a día de hoy con React 18... así que hemos optado por usar [PrimeReact](https://www.primefaces.org/primereact/)

Además, usaremos [PrimeFlex](https://www.primefaces.org/primeflex) para tener acceso a classes CSS de utilidades como márgenes, paddings, etc (p.ej: `mb-5` para un margin bottom)

# Utilities
* Babel.io tester online: https://babeljs.io/repl
* Chakra-ui.com Libreria de componentes para diseño (similar a Bootstrap pero en componentes)
* https://day.js.org/ Librería JS para formateo de fechas