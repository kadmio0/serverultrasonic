let Sensor = require("./Sensor.js");
let express = require('express');
let bodyParser = require("body-parser");
const DISTANCE_LIMIT = 30;
const INITIAL_DISTANCE = 0;
const INITIAL_LED_VALUE= 0;
const PORT = process.env.PORT || '3000';
let app = express();
let sensor = new Sensor(INITIAL_DISTANCE,INITIAL_LED_VALUE); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Distancia = "+sensor.distanceValue);
});

app.post('/',function(req,res){
  sensor.distanceValue=req.body.distance;
  if(sensor.distanceValue<DISTANCE_LIMIT){
    sensor.ledValue=1;
  }else{
    sensor.ledValue=0;
  }
  console.log("Distancia = "+sensor.distanceValue+" - LED: "+sensor.ledValue);
  res.send({distance:sensor.distanceValue, led:sensor.ledValue});
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});