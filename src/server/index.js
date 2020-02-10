var cors = require('cors');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(cors());

let status = true;

app.get('/', function(req, res){
  // res.send({status: true});
  res.sendFile(__dirname + '/index.html');
});

app.get('/false', function(req, res) {
  res.send({status: false});
});

app.get('/true', function(req, res) {
  res.send({status: true});
});

app.get('/status', function(req, res) {
  res.send({status});
});

app.post('/status', function(req, res) {
  status = !status;
  res.status(201).end();
});

setInterval(function() {
  io.emit('status', {status: 'Database connected'});
}, 30*1000);


http.listen(3000, function(){
  console.log('listening on *:3000');
});