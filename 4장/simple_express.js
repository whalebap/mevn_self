const express = require('express')
const path = require('path');
const app = express()
const logger = require('morgan')
const PORT = 12010
const _path = path.join(__dirname, './dist')
//'./dist' 폴더 안의 파일을 서버에 올림. 사용자의 접근이 가능함.
//__dirname : Node.js 전역 변수.  
console.log(_path);

app.use('/dist', express.static(_path))
app.use(logger('tiny')) //morgan 버전 설정
app.use((req, res, next) => { 
    console.log('요청이 왔네요~ 지나갑니다~');
    next()
})

app.get('/book/:bookName', (req, res) => { 
    const { bookName } = req.params;
    res.send(`안녕하세요, 땡스북스입니다. ${bookName}을 주문하셨군요?`)
})

app.listen(PORT, () => { 
    console.log(`너의 서버는? ${PORT}`);
})


