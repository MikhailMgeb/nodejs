const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<a href="/razminochnyje/node-js">Главная / Разминочные задания / Node.JS</a>');

    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});