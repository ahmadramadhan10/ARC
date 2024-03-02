const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        req.on('data', (data) => {
            res.writeHead(200, {'content-type' : 'text/html'});
            const query = JSON.parse(data);
            res.end(`Hai perkenalkan, namaku ${query.nama} dengan NIM ${query.NIM}`);
        });
    } else {
        console.log("Error");
        res.writeHead(404);
    }
});

server.listen(3000, 'localhost');