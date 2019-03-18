var express = require('express');
var app = express();

// 미들웨어 사용
// 요청 수신시 로그를 터미널에 인쇄
var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

// 미들웨어2 사용
// 현재 시간을 찍음
var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});

// id에따라 경로 변경
console.log('Request Type:', req.method);
    app.use('/user/:id', function (req, res, next) {
    next();
});

// 같은 이름의 라우트 경로의 경우 뒤에까지 도달하지 못함
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('User Info');
});
  
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id);
});

// 오류 제어 미들웨어
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);