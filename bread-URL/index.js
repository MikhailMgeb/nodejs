const http = require('http');

const server = http.createServer((req, res) => {
    const path = req.url.split('/').filter((item) => item !== '');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let link = '';

    res.write(`/<a class="links" href="http://localhost:3000">http://localhost:3000</a>`);

    for (const segmentPath of path) {
      link += `/${segmentPath}`;
      res.write(`/<a class="links" href="http://localhost:3000${link}">${segmentPath}</a>`);
    }

    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
