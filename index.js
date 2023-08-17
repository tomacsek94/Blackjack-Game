let cards=[] //array-ordered = list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""



let messageEL=document.getElementById('message-el')
// let sumEl=document.getElementById('sum-el')
let sumEl=document.querySelector('#sum-el')
let cardsEl=document.querySelector('#cards-el')
// object
let player = {
     name:"Tamas" , //=>Key
     chips:"200"    //=>Value
}


let playerName="Tamas"
let playerChips="200"

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name +  ":" + player.chips + "$"

function getRandomCard(){
    
    let randomNumber= Math.floor(Math.random() * 13) + 1

    if(randomNumber>10){
        return 10
    } else if (randomNumber===1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){

    isAlive=true
    let firsCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [firsCard, secondCard]
    sum = firsCard + secondCard
    
    renderGame()

}



function renderGame(){

      cardsEl.textContent="Cards: "

      for(let i=0; i<cards.length; i++){

        cardsEl.textContent += cards[i] + " "

}
      sumEl.textContent="Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

        messageEL.textContent = message

}

function newCard(){

if (isAlive === true && hasBlackJack === false){

    let card=getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}







/*let age=25

if (age >= 22){
    console.log("You can enter the club!")
} else {
    console.log("Go HOME!")
} 

let age=100

if (age < 100){
    console.log("Not eligible")
}  else if(age === 100){
    console.log("Here is your birthday card from the King!")
}  else{
    console.log("Not elegible, you have already gotte one")
}
 */

// Arrays -ordered lists of items

// 0 indexed
/* let featuredPosts= ["Check out my netflix clone",
                    "Here is code for my project",
                    "I have just launched my portofolio"]

 console.log(featuredPosts.length)*/

/* console.log(featuredPosts[0])                    

let mySkills=["Basic HTML",
"Beginner CSS",
 "Zero JavaScript skills"]                    

 console.log(mySkills[1])
 console.log(mySkills[2])
 console.log(mySkills[0]) */


// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean) 


/*let tamas=["Tamas Fabian", "35", true]

let card=[7, 4]

card.push(6)

console.log(card)

let messages=[
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good.Been working on my portofolio lately"
]

let newMessage="Same here!"
messages.push(newMessage)

messages.pop(newMessage)

console.log(messages)*/

// Count
// Count to ten!
// for=loops
// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE


for (let count=10; count < 21; count+=1){
  console.log(count)
}



for (let i=10; i<101; i+=10){
  console.log(i)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]

for (let i=0; i < messages.length; i+=1){
    console.log(messages[i])
}

let cardss=[7, 3, 9]

for (let i=0; i < cardss.length; i++ ){
 console.log(cardss[i])
}

/* let sentence =["Hello" ,"my","name", "is", "Tamas"]
let greetingEl=document.getElementById("greeting-el")

for (let i=0; i<sentence.length; i++){
    greetingEl.textContent+=sentence[i] + " "

} */

let player1Time=102
let player2Time=107


function getFastestRaceTime(){
    if (player1Time<player2Time){
        return player1Time

    } else if(player2Time<player1Time){
        return  player2Time

    } else player1Time
}

let fastestRace=getFastestRaceTime()

console.log(fastestRace)

function totalRaceTime(){
    return player1Time+player2Time
}

let total=totalRaceTime()
console.log(total)

// Generate random numbers

let randomNumber =Math.floor(Math.random() * 6)+1

console.log(randomNumber)

function rollDice(){
    let randomNumber =Math.floor(Math.random() * 6)+1
    return randomNumber
}

console.log(rollDice())

//floor=removes the decimals

let flooredNumber=Math.floor(3.45943)

console.log(flooredNumber)  

// The logical AND operator

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true){
    
        generateCertificat()

}

function generateCertificat(){
    console.log("Generating certificate....")
}

let hasSolvedChallange = false
let hasHintsLeft = false

if (hasSolvedChallange === false && hasHintsLeft === false){

     showSolution()

}

function showSolution(){
    console.log("Showing the solution")
}

// The logical OR operator

let likesDocumentaries = true
let likeStartups = false

if (likesDocumentaries === true || likeStartups === true) {

    recommendMovie()

}


function recommendMovie() {
        console.log("Hey, check out this new film we think you will like!")
}


// Objects - store data in-depth - composite / complex data type
// key-value pairs


let course = {
    title:"Learn CSS grid for free" ,
    lessons:16 ,
    creator: "Per Harald Borgen" ,
    length:63 , 
    level:2,
    isFree:true ,
    tags:["html" , "css"]
}

console.log(course.lessons)


let airbnb = {
    address :"Main Sreet 23" ,
    owner :"Tamas Fabian",
    quality:"Exccelent" ,
    price : 90 ,
    guest : 5 ,
    rooms:["3 Bedroom","2 Bathroom" , "Kitchen", "Sitting Room"],
    isFree:true

}

console.log(airbnb.address)