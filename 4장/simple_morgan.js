const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = 3000

app.use(logger('tiny')) //morgan 버전 설정
app.use((req, res, next) => { 
    console.log('1 Time', Date.now().toLocaleString());
    next()
})
app.use((req, res, next) => { 
    console.log('2 Time', Date.now().toLocaleString());
    next()
})

app.listen(PORT, () => { 
    console.log(`서버가 생성되었습니다. ${PORT}`);
})


