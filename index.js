
let cards = []
let sum = 0
let hasCatch21 = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("messageP")
let sumEl = document.getElementById("sumP")
let cardsEl = document.getElementById("cardsP")
let playerEl = document.getElementById("playerP")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
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
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Add a card"
    } else if (sum === 21) {
        message = "You've won!"
        hasBlackJack = true
    } else {
        message = "You're out!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasCatch21 === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
