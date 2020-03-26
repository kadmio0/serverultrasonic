class Sensor{
    constructor(distance,led){
        this.led=led;
        if(distance){
            this.distance=distance;
        }else{
            distance=0;
        }
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