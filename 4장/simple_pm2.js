const http = require('http')
const PORT = 12010
const server = http.createServer((req, res) => { 
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    const obj = {'이름' : '은아', status : '주니어'}
    res.end(JSON.stringify(obj))
})

setTimeout(() => { 
    JSON.parse("{Z", 5000)
})//에러 발생 코드

server.listen(PORT, () => { 
    console.log(`Sever Running At http://127.0.0.1:${PORT}`);
})

