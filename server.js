var Express = require('express');
var app = Express();
app.use(Express.static('./'));
var server = app.listen(2112,function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s',host,port);
});