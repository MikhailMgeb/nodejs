const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/password') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Привет!</h1>');
    } else {
        res.writeHead(403);
    }

    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})
