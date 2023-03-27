const squares =document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelectorAll('#time-left');
const score = document.querySelectorAll('#score');

let curr_time = 10;
let result = 0;
let hitPosition;
let timerId = null;

// choosing random square for mole
function randomSquareForMole(){
    // removing mole from class name
    squares.forEach((square) =>{
        // classList function: The classList property returns the CSS classnames of an element
        square.classList.remove('mole'); // remove: will remove 'mole' from square's class name
    });

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole'); // add: will add 'mole' in randomSqurare's class name

    // stores id of mole  
    hitPosition = randomSquare.id;
}

// To increment score as soon as we click the mole 
squares.forEach(square => {
    // event listener to listen click of mouse
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            console.log(result);
            document.getElementById("score").textContent = "Your Score: "+ result;
            hitPosition = null;
        }
    })
})

moveMole()

// repeatedly calling the above function inorder to move mole from one square to another in specific interval
function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquareForMole, 500);
}


function countDown(){
    
    curr_time--;
    if(curr_time == 0){
        clearInterval(countDownTimer)
        clearInterval(timerId)
        
        alert("GAME OVER, YOUR SCORE IS " + result)
        
        curr_time = 60;
        result = 0;

        document.getElementById("score").textContent = "Your Score: "+ result;
        document.getElementById("time").textContent = "Time Left: " + curr_time;
        moveMole()
        
    }
    document.getElementById("time").textContent = "Time Left: " + curr_time;
    

}

let countDownTimer = setInterval(countDown, 1000)