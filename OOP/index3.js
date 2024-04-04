// noinspection BadExpressionStatementJS

function Character(image, top, left, right, bottom, size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.size= size;
    this.getCharacterElement = function(){
        return '<img width=" 20px'+ this.size + '"' +
            ' height="10px'+ this.size + '"' +
            ' src="https://www.toonsmag.com/wp-content/uploads/2023/04/Bart-Simpson-cartoon-686x1024.png' + this.image +'"' +
            ' style="top: '+this.top+'+=100%; left:'+this.left+'+= 100%;position:absolute;"  alt=""/>';
}
    this.moveTop = function (){
        this.top += 20;
        console.log(this.bottom)
    }
    this.moveBottom = function (){
        this.bottom += 20;
        console.log(this.top)
    }
    this.moveLeft = function (){
        this.left += 20;
        console.log(this.right)
    }
    this.moveRight = function (){
        console.log(this.left)
    }
}
let character = new Character('https://www.toonsmag.com/wp-content/uploads/2023/04/Bart-Simpson-cartoon-686x1024.png', 20, 30, 200);
function start(){
    if(character.left < window.innerWidth - character.size){
        character.moveRight();
    } else if (character.right < window.innerWidth - character.size){
        character.moveLeft()
    } else if (character.top < window.innerWidth - character.size){
        character.moveBottom()
    } else (character.bottom < window.innerWidth - character.size)
        character.moveTop()

    document.getElementById('game').innerHTML = character.getCharacterElement();
    setTimeout(start, 500)
}
start();

