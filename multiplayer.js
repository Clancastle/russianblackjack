let cards = []
let sum = 0
let isAlive = false
let blackjack = false
let message = ''
let dealersSum = 0
let dealersCardsNumber = []


function startGame(){
    isAlive = true
    let cardOne = randomCard()
    cards = [cardOne]
    sum = cardOne

    document.getElementById('sum-el').textContent = "Sum: " + sum
    saveGame()
    let dealerOneCard = randomCard()
    dealersSum = dealerOneCard
    dealersCardsNumber = [dealerOneCard]
    dealer()

}
function saveGame() { // add different function which changes message when called, and is called as frequently as saveGame()
    if(sum < 21){
        message = 'New Card?'
    }else if( sum === 21){
        isAlive = false
        blackjack = true
        message = 'You win!'
    }else{
        isAlive = false
        message = 'You went over, you lose.'
    } 
    document.getElementById("cards-el").textContent = 'Cards: ' 
    for(let i = 0; i < cards.length; i++){   
        document.getElementById("cards-el").textContent += cards[i] + ' '
    }
    document.getElementById("message").textContent = message
}
function newCard(){
    if(blackjack === false && isAlive === true){
        let card = randomCard()
        sum += card
        cards.push(card)

        document.getElementById('sum-el').textContent = "Sum: " + sum

        let dealersCard = randomCard()
        dealersSum += dealersCard
        dealersCardsNumber.push(dealersCard)
        saveGame() 
        dealer()
        if (sum > 21 && dealersSum > 21){
            message = 'dealer wins'
        }
    }
}
function randomCard(){
    return Math.floor(Math.random()*13)+1
}

//message, cards-el, sum-el; dealersum

//from here make the dealers side of the code...

function dealer(){ // basically the logic as to who wins who,, nvm this logic will be shown in the stand()

    if(isAlive === false){
        document.getElementById('dealersum').textContent = 'Sum: ' + dealersSum + "( "+ dealersCardsNumber + ' )'
    } else {
        document.getElementById('dealersum').textContent = 'Sum: '
    }
} 
function stand(){ //if stand === true, you cannot press stand
    if(isAlive === true){
        if(dealersSum > 21){
            message = 'dealer is over, player wins'
        }else if(dealersSum > 21 ){
        }else if (dealersSum === sum){
            message = 'a tie'
        }else if(sum > dealersSum ){
            message = 'you win dealer'
        }else if(dealersSum > sum){
            message = 'you lose buddy'
        }
        document.getElementById('message').textContent = message
        document.getElementById('dealersum').textContent = 'Sum: ' + dealersSum + "( "+ dealersCardsNumber + ' )'
        // first compare, then reset
        cards = []
        sum = 0
        isAlive = false
        blackjack = false
        message = 'reset game'
        dealersSum = 0
        dealersCardsNumber = []
    }
}
function quit(){
    cards = []
    sum = 0
    isAlive = false
    blackjack = false
    message = 'reset game'
    dealersSum = 0
    dealersCardsNumber = []

    document.getElementById('message').textContent = 'game reset. '
    document.getElementById('cards-el').textContent = 'Cards: '
    document.getElementById('sum-el').textContent = 'Sum: '
    document.getElementById('dealersum').textContent = 'Sum: '
}

//probabilities
//dealer goes over first,  or player goes over first
//if newCard and sum > dealersSum, you lose
//