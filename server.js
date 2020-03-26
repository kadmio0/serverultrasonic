const DISTANCE_LIMIT = 30;
let Sensor = require("./Sensor.js");
let express = require('express');
let bodyParser = require("body-parser");
let app = express();
let sensor = new Sensor(); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Distance = "+sensor.distance);
});

app.post('/',function(req,res){
  sensor.distance=req.body.distance;
  if(sensor.distance<DISTANCE_LIMIT){
    sensor.ledValue=1;
  }else{
    sensor.ledValue=0;
  }
  console.log("Distancia = "+sensor.distance+" - LED: "+sensor.ledValue);
  res.send({distance:sensor.distance, led:sensor.ledValue});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});