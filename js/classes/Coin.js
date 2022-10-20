class Coin extends Sprite{
    constructor({position, imageSrc, frameRate, animations, newname}){
        super({imageSrc, frameRate, animations})
        this.position = position
        this.gravity = 0.05
        this.velocity = {
            x: 0,
            y:0
        }
        this.collidable = true

    }

    updateCoin(){

        this.checkForPlayerCollision()

        if(this.fall){
            this.coinFall()
        }

    }

    checkForPlayerCollision(){
        if(!this.collidable)return
        if (player.hitbox.position.y <= this.position.y + this.height &&
            player.hitbox.position.y + player.hitbox.height >= this.position.y &&
            player.hitbox.position.x + player.hitbox.width >= this.position.x &&
            player.hitbox.position.x <= this.position.x + this.width){
                this.velocity.y += -2
                this.fall = true
                this.collidable = false
            }
    }

    coinFall(){
        
        console.log('go2')
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y   
        if(this.velocity.y >= 2.25) {
            this.fall = false
            this.position.y = 20000
        }
    }
}