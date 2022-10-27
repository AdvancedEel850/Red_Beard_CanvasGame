addEventListener('keydown', (event) => {
    switch (event.key){
        case 'w' :
            if(player.velocity.y == 0){
                player.velocity.y = -10
        }
        break
        case ' ':
            if(player.velocity.y == 0){
                player.velocity.y = -10
        }
        break
        case 'ArrowUp':
            if(player.velocity.y == 0){
                player.velocity.y = -10
        }
        break
        case 'a':
            //move player to left
            keys.a.pressed = true

            break
        case 'ArrowLeft':
            //move player to left
            keys.a.pressed = true

            break
        case 'd':
            //move player to right
            keys.d.pressed = true
            break
        case 'ArrowRight':
            //move player to left
            keys.d.pressed = true

            break
        case 's':
            if(player.velocity.y != 0){
                player.velocity.y = 10
            }
            break
        case 'ArrowDown':
            if(player.velocity.y != 0){
                player.velocity.y = 10
            }
            break
    }

})
addEventListener('keyup', (event) => {
    switch (event.key){
        case 'a':
            //move player to left
            keys.a.pressed = false

            break
        case 'd':
            //move player to right
            keys.d.pressed = false
            break
        case 'ArrowLeft':
            //move player to left
            keys.a.pressed = false

            break
        case 'ArrowRight':
            //move player to right
            keys.d.pressed = false
            break
    }

})