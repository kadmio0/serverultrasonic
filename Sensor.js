class Sensor{
    constructor(distance,led){
        this.led=led; 
        this.distance=distance; 
    } 

    set distanceValue(value){
        this.distance=value;
    }

    get distanceValue(){
        return this.distance;
    }

    set ledValue(value){
        this.led=value;
    }

    get ledValue(){
        return this.led;
    } 
}

module.exports = Sensor;