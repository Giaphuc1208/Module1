class Rectangle{
    width;
    length;
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea(){
        let s = this.width * this.length
        return s;
    }
    getPerimeter(){
        let c = (this.width + this.length) * 2;
        return c;
    }
    getDraw(d, r){
        let canvas=document.getElementById("int");
        let hcm = canvas.getContext("2d")
        hcm.fillStyle='#ec70b3';
        hcm.fillRect(d, r, this.width, this.length)
    }
}
let myRectangle = new Rectangle(500, 900);
document.write(`<br> length: ${myRectangle.length}, width: ${myRectangle.width}, area: ${myRectangle.getArea()}, perimeter: ${myRectangle.getPerimeter()}`)
myRectangle.getDraw(40, 50)