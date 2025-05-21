# Chat Simples com Node.js, Express e Socket.io

Este é um projeto de chat em tempo real feito com Node.js, Express e Socket.io. Ele permite que múltiplos usuários conversem em uma interface web simples e moderna.

## Funcionalidades

- Envio e recebimento de mensagens em tempo real
- Interface responsiva e fácil de usar
- Exibição do nome do usuário junto à mensagem
- Histórico de mensagens enquanto o servidor estiver rodando

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor:**
   ```sh
   node server.js
   ```
   Ou, se preferir, altere a porta no arquivo `server.js` para evitar conflitos.

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```
   (ou a porta configurada)

## Estrutura do Projeto

```
├── public/
│   ├── index.html
│   └── style.css
├── server.js
├── package.json
```

- `server.js`: Servidor Express e lógica do Socket.io
- `public/index.html`: Interface do chat
- `public/style.css`: Estilos do chat

## Tecnologias

- Node.js
- Express
- Socket.io
- HTML/CSS/JavaScript (frontend)

## Licença

Este projeto está sob a licença MIT.
