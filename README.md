# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# INICIANOD PROJETO

> npm create vite@latest
	
> npm i styled-components

> npm i @types/styled-components -D

###	Criar globalStyles	criar themes
	
### types do styledcomponents criar na pasta @types o	arquivo styled.d.ts
		import 'styled-components'
		import { defaultTheme } from '../styles/themes'

		type ThemeType = typeof defaultTheme

		declare module 'styled-components' {
		  export interface DefaultTheme extends ThemeType {}
		}

	
> npm i eslint -D
> npm i @rocketseat/eslint-config -D

###	arquivo eslintrc.json
		{
		  "extends": "@rocketseat/eslint-config/react",
		  "rules": {
		    "no-unused-vars": "off"
		  }
		}
		
para testar o codigo e corrigir : npx eslint src --ext .ts, .tsx --fix

npm i react-router-dom

	pasta routes
	arquivo Routes.tsx
		import { Routes, Route } from 'react-router-dom'
		import { Home } from '../pages/Home'
		import { Checkout } from '../pages/Checkout'
		import { Success } from '../pages/Success'

		export function Router() {
		  return (
		    <Routes>
		      <Route path="/" element={<Home />} />
		      <Route path="/checkout" element={<Checkout />} />
		      <Route path="/success" element={<Success />} />
		    </Routes>
		  )
		}
		
	arquivo App.tsx
		import { BrowserRouter } from 'react-router-dom'

		import { ThemeProvider } from 'styled-components'
		import { defaultTheme } from './styles/themes'
		import { GlobalStyle } from './styles/global'

		import { Router } from './routes/Routes'

		export function App() {
		  return (
		    <ThemeProvider theme={defaultTheme}>
		      <GlobalStyle />
		      <BrowserRouter>
			<Router />
		      </BrowserRouter>
		    </ThemeProvider>
		  )
		}

