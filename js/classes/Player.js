class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate, animations}){
        super({imageSrc, frameRate, animations})
        this.position = {
            x: 100,
            y: 0
        }

        this.sides = {
            bottom: this.position.y + this.height,
            right: this.position.x + this.width,
            left: this.position.x,
            top: this.position.y
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.gravity = 0.3

        this.collisionBlocks = collisionBlocks

    }

    update(){
        //this is the blue box
        // ctx.fillStyle = 'rgba(0, 0, 255, 0.5'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x

        this.updateHitbox()

        this.checkForHorizontalCollisions()
        
        this.applyGravity()
        
        this.updateHitbox()
        
        // hitbox
        // ctx.fillStyle = 'rgba(255, 0, 0, 0.25)'       
        // ctx.fillRect(this.hitbox.position.x, 
        //     this.hitbox.position.y, 
        //     this.hitbox.width, 
        //     this.hitbox.height)
        
        this.checkForVerticalCollisions()

        this.updateHitbox()

        this.checkForCanvasCollisions()
    }

    switchSprite(name){
        if (this.image == this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameBuffer = this.animations[name].frameBuffer
        this.frameRate = this.animations[name].frameRate
        
    }

    updateHitbox(){
        this.hitbox = {
            position: {
                x: this.position.x + 58,
                y: this.position.y + 34
            },
            width: 50,
            height:53

        } 

    }

    checkForHorizontalCollisions() {
        for(let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            
            //if collision exist
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height)
                {
                    //collision on x axis to the left
                    if(this.velocity.x < 0){
                        const offset = this.hitbox.position.x - this.position.x
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                        break
                    }

                    //collision on x axis to the right
                    if(this.velocity.x > 0){
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                        this.position.x = collisionBlock.position.x - offset -0.01
                        break
                    }
            }
        }
    }
    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    checkForVerticalCollisions(){
        for(let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            
            //if collision exist
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height)
                {
                    //collision on y axis going up
                    if(this.velocity.y < 0){
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y
                        this.position.y 
                        = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                        break
                    }

                    //collision on y axis going down
                    if(this.velocity.y > 0){
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                        this.position.y = collisionBlock.position.y - offset -0.01
                        break
                    }
            }
        }
    }
    checkForCanvasCollisions(){
        if(this.hitbox.position.x <= 0){
            if(this.velocity.x < 0){
                const offset = this.hitbox.position.x - this.position.x
                this.position.x = 0 - offset - 0.01
            }
        }
        if(this.hitbox.position.x >= canvas.width -50){
            if(this.velocity.x > 0){
                const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                this.position.x = canvas.width - offset - 0.01
            }
        }
    }
}