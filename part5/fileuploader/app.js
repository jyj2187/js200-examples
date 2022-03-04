// GET / : 웹페이지 index.html을 전달하는 API
// POST /upload : 파일 업로드 API
// GET /file_list : 파일 리스트 API

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const UPLOAD_PATH = 'uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_PATH),
    filename: (req, file, cb) => cb(null, file.fieldname + '_' + Date.now()
        + path.extname(file.originalname))
});
const upload = multer({ storage });

const app = express();

// 에러 처리 미들웨어 함수
app.use((err, req, res, next) => {
    res.status(500).send('파일 업로드에 실패하였습니다.');
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', cors(), upload.single('file'), (req, res, next) => {
    if (!req.file) return next(400);
    res.status(200).send('파일을 정상적으로 업로드하였습니다.');
});

app.get('/file_list', cors(), (req, res, next) => {
    fs.readdir(path.join(__dirname, UPLOAD_PATH), (err, files) => {
        if (err) return next(err);
        res.status(200).send(files);
    });
});

app.listen(3000);