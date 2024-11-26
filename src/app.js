const express = require('express');
const app = express();
const routes = require('./routes/routes'); // Importa as rotas

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
