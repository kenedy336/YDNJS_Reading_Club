var defaultVariants = {
  rock: ["scissors"],
  scissors: ["paper"],
  paper: ["rock"]
}

function playWithAi(userChoice, variants = defaultVariants) {
  var aiChoice = getRandomChoice(variants)
  return play(variants, userChoice, aiChoice)
}

function getRandomChoice(variants) {
  var randomNumber = Date.now() % Object.keys(variants).length 
  return Object.keys(variants)[randomNumber]
}

function play(variants, firstChoice, secondChoice) {
  return secondChoice === firstChoice ? drawMessage()
        : ifFirstBeatSecond(firstChoice, secondChoice, variants) ? winnerMessage(firstChoice, secondChoice)
        : winnerMessage(secondChoice, firstChoice)
}

function drawMessage(){
  return "draw" 
}

function ifFirstBeatSecond(firstChoice, secondChoice, variants) {
  return variants[firstChoice] && ~variants[firstChoice].indexOf(secondChoice)
}

function winnerMessage(winner, loser){
  return `${winner} beats ${loser}`
}

window.permitted = Object.keys(defaultVariants)
console.log(permitted)
