const userChoice = document.getElementById("user-choice")
const computerChoice = document.getElementById("computer-choice")
let resultEl = document.getElementById("result")
//buttons
const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorEl = document.getElementById("scissor")
//
let userAns = ""
let computerAns = ""
//images
const imgArr = [`<img src="rock.png" alt="rock">`,
              `<img src="paper.png" alt="paper">`,
              `<img src="scissor.png" alt="scissor">`
            ]
rockEl.addEventListener("click",function(){
    userChoice.innerHTML = imgArr[0]
    userAns = "rock"
    generateComputerChoice()
})
paperEl.addEventListener("click",function(){
    userChoice.innerHTML = imgArr[1]
    userAns = "paper"
    generateComputerChoice()
})
scissorEl.addEventListener("click",function(){
    userChoice.innerHTML = imgArr[2]
    userAns = "scissor"
    generateComputerChoice()
})

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    computerChoice.innerHTML = imgArr[randomNumber]
    if(randomNumber == 0) computerAns = "rock"
    else if(randomNumber == 1) computerAns = "paper"
    else computerAns = "scissor"

    if(userAns === "rock"){
        if(computerAns == "rock") resultEl.textContent = "Result : Match Tie"
        else if(computerAns == "paper") resultEl.textContent = "Result : You Lost"
        else resultEl.textContent = "Result : You Won"
    }
    else if(userAns == "paper"){
        if(computerAns == "rock") resultEl.textContent = "Result : You Won"
        else if(computerAns == "paper") resultEl.textContent = "Result : Match tie"
        else resultEl.textContent = "Result : You Lost"
    }
    else{
        if(computerAns == "rock") resultEl.textContent = "Result : You Lost"
        else if(computerAns == "paper") resultEl.textContent = "Result : You Won"
        else resultEl.textContent = "Result : Match tie"
    } 
}