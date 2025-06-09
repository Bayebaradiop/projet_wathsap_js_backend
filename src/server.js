// filepath: /home/mouhamadou-lamine/projet1telwin_back/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json'); // Chemin vers votre fichier db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// package.json
{
  "scripts": {
    "start": "node server.js"
  }
}