## Setup

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Yarn](https://yarnpkg.com/) instalado globalmente

### Instalação

1. Clone o repositório:

```bash
   git clone <url-do-repositorio>
   cd aura
```

2. Instale as dependências:

```bash
   yarn install
```

### Rodando o projeto

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

### Scripts disponíveis

| Comando        | Descrição                                               |
| -------------- | ------------------------------------------------------- |
| `yarn dev`     | Inicia o servidor de desenvolvimento com hot reload     |
| `yarn build`   | Gera o build de produção (roda `tsc -b` e `vite build`) |
| `yarn lint`    | Executa o ESLint no projeto                             |
| `yarn preview` | Faz preview do build de produção localmente             |

## Variáveis de Ambiente

Este projeto utiliza o [EmailJS](https://www.emailjs.com/) para envio de e-mails (ex: formulário de contato), portanto é necessário configurar as seguintes variáveis de ambiente.

1. Crie um arquivo `.env` na raiz do projeto (copie o exemplo de `.env.example`, se existir):

```bash
   cp .env.example .env
```

2. Preencha as variáveis com as credenciais da sua conta no [EmailJS Dashboard](https://dashboard.emailjs.com/):

```dotenv
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

| Variável                   | Descrição                                      |
| -------------------------- | ---------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | ID do serviço de e-mail configurado no EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template de e-mail utilizado no envio    |
| `VITE_EMAILJS_PUBLIC_KEY`  | Chave pública da sua conta EmailJS             |

> ⚠️ **Importante:** o arquivo `.env` não deve ser commitado no repositório. Certifique-se de que ele está listado no `.gitignore`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
