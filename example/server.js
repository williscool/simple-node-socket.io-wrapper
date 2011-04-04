var express = require('express');
var app = express.createServer();
var sockH = require('../lib/node-socket-wrapper').config(app);

app.set('view engine', 'jade');
app.listen(5000);

app.get("/", function (req, res){

  res.render('test.jade', {});
     
     sockH.on('gotClient', function(seh){
         
        seh.greeting('hi there client. this is a bit easier to write');
        setTimeout( seh.calling('im caliing you!'), 5000);
     
     });
   
});

app.configure('development', function(){
    app.use(express.static('../client'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

console.log('Express server started on port %s', app.address().port);                                                
