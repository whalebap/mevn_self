const http = require('http')
const PORT = 12010
const server = http.createServer((req, res) => { 
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    const obj = {'이름' : '은아'}
    res.end(JSON.stringify(obj))
})

server.listen(PORT, () => { 
    console.log(`Sever Running At http://127.0.0.1:${PORT}`);
})

