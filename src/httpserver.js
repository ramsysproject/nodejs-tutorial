const http = require('http');

http.createServer((request, response) => {
    if(request.method === 'POST' && request.url === '/greet') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            console.log(typeof body);
            body = Buffer.concat(body).toString();
            console.log(typeof body);
            response.setHeader('Content-Type', 'application/json');
            response.end(body);
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(9000);