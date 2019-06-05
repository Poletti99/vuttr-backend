# Very Useful Tools to Remember - Backend

A Challenge of BossaBox

## What you need?

- Node
- NPM or Yarn;
- Docker with MongoDB container or MongoDB atlas.

## Installation

- Clone este repositório;
- Instale as dependências com o gerenciador de pacotes de sua preferência;
  ex: `yarn or npm install`
- Precisaremos criar algumas variáveis de ambiente, portanto, crie um arquivo `.env` na raiz do projeto com as seguinte estrutura:

```
MONGODB_URL=YOUR MONGODB URL //url para conexão com MongoDB
SECRET_KEY=YOUR_SECRET_KEY //Key utilizada para criar o token jwt
PORT=YOUR_PORT //porta em que a vuttr api irá escutar. default 3000
MODE=MORGAN_MODE //Modo de logs do Morgan
```

## How to use?

- Execute the API with `yarn dev or npm run dev` to get the API hotreload;
  or
- Execute the API with `yarn start or npm start` to get the API without hotreload;
