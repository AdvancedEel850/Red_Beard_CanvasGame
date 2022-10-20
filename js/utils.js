Array.prototype.parse2D = function(){
    const rows = []
    for (let i = 0; i < this.length; i+=30){
        rows.push(this.slice(i, i + 30))
    }

    return rows

}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y_pos) => {
        row.forEach((symbol, x_pos) => {
            if (symbol == 50) {
                //push a new collision block
                objects.push(new CollisionBlock({
                    position: {
                        x:x_pos * 50.4,
                        y:y_pos * 50.8,
                    }
                }))
            }
        })
    });
    return objects
}