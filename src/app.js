document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div")
    const scoreDisplay = document.querySelector("span")
    const startBtn = document.getElementsByClassName("start")

    const width = 10

    let currentIndex = 0 //* first div in our grid
    let appleIndex = 0 //* first div in our grid
    let currentSnake = [2,1,0] //* this is the structure of the snake. 2 = head, 1 = body, and 0 = tail.
    let direction = 1 //* 1 meaning snake is moving one div down the array ie, to the right.
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //! Start/Restart game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove("snake"))
        squares[appleIndex].classList.remove("apple")
        clearInterval(interval)
        score = 0
        //randomApple()
        direction = 1
        scoreDisplay.innerHTML = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add("snake"))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //! Function that deals with all outcomes of Snake
    function moveOutcomes() {

        //^ deals with the snake hitting border and snake hitting itself
        if {

        }
    }

    //! Movement
    function movement(e) {
        squares[currentIndex].classList.remove("snake") //* we are removing the class of snake from all the squares

        /**
         * A = 65
         * W = 87
         * D = 68
         * S = 83
         * 37	Arrow Left
         * 38	Arrow Up
         * 39	Arrow Right
         * 40  	Arrow Down
        */
        
        if (e.keyCode === 39) {
            direction = 1 //* arrow right
        } else if (e.keyCode === 68) {
            direction = 1 

        } else if (e.keyCode === 38) {
            direction = -width //* if pressed, snake will go back ten divs appearing to go up.
        } else if (e.keyCode === 87) {
            direction = -width

        } else if (e.keyCode === 37) {
            direction = -1 //* arrow left
        } else if (e.keyCode === 65) {
            direction = -1

        } else if (e.keyCode === 40) {
            direction = +width //* if pressed, snake will go ten divs from where you are now
        } else if (e.keyCode === 83) {
            direction = +width
        }
    }

    document.addEventListener("keydown", movement)
})