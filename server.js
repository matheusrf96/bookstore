const http = require("http")
const port = 3000

const routes = {
    '/': 'Homepage',
    '/books': 'Books list',
    '/authors': 'Authors list',
    '/about': 'Project info',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(routes[req.url])
})

server.listen(port, () => console.log(`Running on port ${port}`))
