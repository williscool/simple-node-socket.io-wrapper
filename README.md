# Simple Node Socket.io Wrapper

    var express = require('express');
    var app = express.createServer();
    app.use(express.bodyParser());

    var sockH = require('../lib/node-socket-wrapper').config(app);

    app.listen(5000);

    app.get("/", function (req, res){
    
         sockH.on('gotClient', function(seh){
           
            seh.greeting('hi there client. this is a bit easier to write');
            setTimeout( seh.calling('im caliing you!'), 5000);
            seh._trigger('anEventIMadeUp', 'A message I would like to send' );
            seh._trigger('passingData', req.body.somethingOrOther );

         });

    });
 

## How it works

1) It binds to any connect server (in the example an express one) 

2) Returns a socket bound to the port of your server  

3) on the `gotClient` event it returns the client that has connected with helpful functions wrapped around it that you can extend


## This allows you to

a) leave socket.io connection code out of your app code.

b) easily access actual clients

c) trivially use socket.io on more than one page in an app.


## Usage

there is server example in this repository to help you get started


## Credits

parts of the server code inspired by this article

[http://spiritconsulting.com.ar/fedex/2010/11/events-with-jquery-nodejs-and-socket-io/](http://spiritconsulting.com.ar/fedex/2010/11/events-with-jquery-nodejs-and-socket-io/)

server depend on [`express`](http://expressjs.com).
