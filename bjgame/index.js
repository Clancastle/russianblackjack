// i will copy the code and then do it myself tmrw
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// document.getElementById("message-el")                    check
// document.getElementById("sum-el")                        check
// document.getElementById("cards-el")                    ✓
// document.getElementById("player-el")                     idk if imma do this

function randomCard() {
    return Math.floor( Math.random()* 13 ) +1
    

}

function startGame() {
    isAlive = true
    let cardOne = randomCard()
    cards = [cardOne]
    sum = cardOne 
    renderGame()

    document.getElementById('cards-el').textContent = 'Cards: ' + cardOne
    document.getElementById('sum-el').textContent = "Sum: " + sum

}

function renderGame() {
    if(sum < 21){
        message = 'New Card?'
    }else if( sum === 21){
        hasBlackJack = true
        message = 'You win!'
    }else{
        isAlive = false
        message = 'You went over, you lose.'
    } //somehow i have to do += to not crash my code, maybe use this more often or learn when to use it
    document.getElementById("cards-el").textContent = 'Cards: ' //| cause if i just used the code in the bottom, it would add to itself
    for(let i = 0; i < cards.length; i++){   // like, card1 is 10, cards is 10, card 2 is 13, cards is 10 10 13, card 3 is 2, cards is 10 10 13 10 10 13 2
        document.getElementById("cards-el").textContent += cards[i] + ' '
    }
    document.getElementById("message-el").textContent = message
}


function newCard() {
    if(isAlive === true && hasBlackJack === false){

        let card = randomCard()
        cards.push(card)
        sum += card
        document.getElementById("sum-el").textContent = 'Sum: ' + sum
        renderGame()
    }
}



// set the sum to add in the add card part

// also make it so if i went over, i reset, or cannot get a new card
// make it so i can just reset the values in the html file by just calling one function.


// maybe also create a button that links to a new page, and that page has
// blackjack you can play versus a dealer