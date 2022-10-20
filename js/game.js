const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth - 30;
canvas.height = innerHeight - 30;
canvas.style.position = 'center';


const parsedCollisions = collisionsLevel1.parse2D()

const collisionBlocks = parsedCollisions.createObjectsFrom2D()

function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

const background = new Sprite({
    position: {
    x:0,
    y:0,
    }, 

imageSrc: "./img/map.png"

})
const player = new Player({
    collisionBlocks, 
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runLeft.png'
        }
    }
})
var coins = [];
function __init__(){
    for(let i = 0; i < generateRandom(10,100); i++){
    coins[i] = new Coin({position: {
        x: generateRandom(350, canvas.width - 50),
        y: generateRandom(200, 400)
    },
    imageSrc: './img/coinRotates.png',
    frameRate: 9,

    }) 
    }
    player.velocity.x = 0
    player.velocity.y = 0
    player.position.x = 50
    player.position.y = 50
}
const keys ={
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    }
}
function animate(){
    if(coins.length != 0)window.requestAnimationFrame(animate);
    ctx.fillStyle = 'Black'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.switchSprite('runRight')
        this.lastdirection = 'right'
        player.velocity.x = 4
    }
    else if (keys.a.pressed) {
        player.switchSprite('runLeft')
        this.lastdirection = 'left'
        player.velocity.x = -4
    }
    else{
        if(this.lastdirection == 'left'){
            player.switchSprite('idleLeft')
        }
        else{
            player.switchSprite('idleRight')
        }
    }

    background.draw()
    collisionBlocks.forEach(collisionBlock =>{
        collisionBlock.draw()
    })
    
    player.draw()
    player.update()
    for(let i = 0; i < coins.length; i++){
        coins[i].draw()
        coins[i].updateCoin()
        if(coins[i].position.y >= 20000){
            coins.splice(i, 1)
        }
    }
    if(coins.length == 0){
        popup.style.display = 'flex'
        
    }

}

var popup = document.querySelector("#startPopup")
var startGameButton = document.querySelector("#startGame")

startGameButton.addEventListener('click', (event => {
    popup.style.display = 'none'
    __init__()
    animate()
}))

