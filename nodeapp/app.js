var express = require('express');

var app = express();

app.get('/ping', function ( req, res ){
    res.send('up');
});

app.listen(3001, function(){
    console.log('app up');
})