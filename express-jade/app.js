var express = require('express');
var app = express();

// 코드를 정렬시켜 이쁘게 보여줌
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/template', function(req, res){
  res.render('temp', {time:Date(), title:'Jade'});
})

app.listen(3000);