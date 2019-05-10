// Enemies our player must avoid
class Enemy{
    // Variables applied to each of our instances go here
    constructor(x, y, speed){
        this.x = x
        this.y = y
        this.speed = speed
        this.sprite = 'images/enemy-bug.png'
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        this.x += (dt * this.speed)
        if(this.x >= 400){
            this.x = 0
        }
    }
    // Draw the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Our player
class Player{
    // Variables applied to each of our instances go here
    constructor(x, y, speed){
        this.x = x
        this.y = y
        this.sprite = 'images/char-boy.png'
    }

    // Update the enemy's position, required method for game
    update(){        
        allEnemies.forEach(element => {
            let x = Math.round(element.x)
            x = Math.ceil(x/100)*100 //this line to mack the game harder :) if you want easier gameplay comment it out
            if(this.x == x && this.y == element.y){ //Handling Collision
                player.x = 200
                player.y = 400
                alert('collision, The game will reset')
            }
        })
    }

    // Draw the player on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    
    handleInput(keyCode){
        if(keyCode == 'up'){
            this.y = this.y - 100
        }
        if(keyCode == 'down' && this.y < 400){
            this.y = this.y + 100
        }
        if(keyCode == 'left' && this.x > 0){
            this.x = this.x - 100
        }
        if(keyCode == 'right' && this.x < 400){
            this.x = this.x + 100
        }
        if(this.y < 0){
            this.x = 200
            this.y = 400
            alert('Winner, Click OK to reset')
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200,400)
var firstEnemy = new Enemy(0,100,150)
var secondEnemy = new Enemy(0,200,50)
var therdEnemy = new Enemy(0,300,100)
var forthEnemy = new Enemy(0,0,120)

var allEnemies = []
allEnemies.push(firstEnemy)
allEnemies.push(secondEnemy)
allEnemies.push(therdEnemy)
allEnemies.push(forthEnemy)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    player.handleInput(allowedKeys[e.keyCode])
})
