let player = {
    name: "Mike",
    chips: 100
}

let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("p1")
let sumEl = document.getElementById("p3")
let cardEl = document.querySelector(".p-2")
let cards = []
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function randomNum() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    } 

}

function startGame() {

    isAlive = true
    let firstCard = randomNum()
    let secondCard = randomNum()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}


function renderGame() {
    cardEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {

        cardEl.textContent += cards[i] + " "
        

    }
     
    sumEl.textContent = "Sum:" + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
   
}


function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        
        let card = randomNum()
        sum += card
        cards.push(card)
        renderGame()

    }

    
}
