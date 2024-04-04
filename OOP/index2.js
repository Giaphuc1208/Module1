class Temperature{
    celsius
    constructor(celsius){
        this.celsius = celsius;
    }
    getFahrenheit(){
        return 9/5 * this.celsius + 32;
    }
    getKenvin(){
        return this.celsius + 273.15;
    }
}
let myTemperature = new Temperature(25);
document.write(`Celsius: ${myTemperature.celsius}<br> Fahrenheit: ${myTemperature.getFahrenheit()}<br>Kenvin: ${myTemperature.getKenvin()}`)