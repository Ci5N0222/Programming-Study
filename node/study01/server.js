const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, () => {
    console.log('node server start');
});

// 해당 파일을 사용하기 위해 등록
app.use(express.static(path.join(__dirname, 'node-react01/dist')));

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'node-react01/dist/index.html'));
});

// DB에서 데이터를 받아 response 하는 경우
app.get('/product', (req, res) => {
    // DB에서 데이터 조회했다고 가정
    const result = { name : "jack" }
    res.join(result);
});

// React-Router를 사용하는 경우 작성
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'node-react01/dist/index.html'));
});