const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bem vindo ao meu exercício!</h1>
        <p>Aqui estão as rotas que você pode acessar:</p>
        <ul>
            <li><a href="/nome/Jose">/nome/Jose</a></li>
            <li><a href="/nome/Maria">/nome/Maria</a></li>
            <li><a href="/repetir/Ola!/3">/repetir/Ola!/3</a></li>
            <li><a href="/repetir/Oi/5">/repetir/Oi/5</a></li>
            <li><a href="/som/cao">/som/cao</a></li>
            <li><a href="/som/gato">/som/gato</a></li>
            <li><a href="/rep?p=Oi&q=3">/rep?p=Oi&q=3</a></li>
        </ul>
    `);
});

router.get('/nome/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Bem vindo(a) ${nome}!`);
});

router.get('/repetir/:palavra/:quantidade', (req, res) => {
    const palavra = req.params.palavra;
    const quantidade = parseInt(req.params.quantidade, 10);
    res.send(`${palavra} `.repeat(quantidade).trim());
});

router.get('/som/:animal', (req, res) => {
    const sons = {
        cao: "O cachorro faz 'Auuu Auuu Auuu'.",
        gato: "O gato faz 'Miauuu'.",
        vaca: "A vaca faz 'Mooon'.",
        ovelha: "A ovelha faz 'Meeeee'.",
        cavalo: "O cavalo faz 'Rhiiiii'."
    };

    const animal = req.params.animal.toLowerCase();
    const som = sons[animal] || 'Animal desconhecido.';
    res.send(som);
});

router.get('/rep', (req, res) => {
    const palavra = req.query.p || '';
    const quantidade = parseInt(req.query.q, 10) || 1;
    res.send(`${palavra} `.repeat(quantidade).trim());
});

router.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

module.exports = router;
