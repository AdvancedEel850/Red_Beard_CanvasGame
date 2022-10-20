class CollisionBlock {
    constructor({position}){
        this.position = position
        this.width = 50.5
        this.height = 50.5
    }

    draw(){
        ctx.fillStyle = 'rgba(255 ,0, 0, 0.0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}