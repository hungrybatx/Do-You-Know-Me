var readlineSync=require("readline-sync")
var userName=readlineSync.question("Hi, What's your name? ")
console.log("Welcome", userName,"to 'DO YOU KNOW AARMAN?'")



var questions= [{
  question: "What is my favorite football club? ",
  answer: "real madrid"
  },

  {
  question: "Where do I live? ",
  answer: "lucknow"
  },

  {
  question:"What is my favorite dish? ",
  answer: "biryani"
  },

  {
  question:"Who is my favorite superhero? ",
  answer: "batman"
  },
  {
  question:"What is my favorite movie? ",
  answer: "jojo rabbit"
  },
  {
  question: "What is my favorite color? ",
  answer: "green"
  },
  {
  question:"What is my favorite non-fiction novel? ",
  answer: "the name of the wind"
  },
  {
  question:"Who is my favorite music artist? ",
  answer: "kanye"
  },
  {
  question:"What is my favorite song? ",
  answer: "devil in a new dress"
  },
  {
  question:"What is my favourite programming language? ",
  answer: "javascript"
  }
                
              ]



var score=0




function aboutMe(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer){
    console.log("You're right :) \n")
    score+=1;
  }
  else{
    console.log("You're wrong :( \n")
  }
  console.log("Your current score is:",score)
  console.log("________\n")
}


for(i=0;i<questions.length;i++){
  var currentquestion=questions[i]
  aboutMe(currentquestion.question,currentquestion.answer)
  //console.log("Your score is", score);
}

var highScore= {
  name: "Shubham",
  score: 9}

console.log("Your score is", score);
console.log("High score is:",highScore.score,"by",highScore.name)

if (score>highScore.score) {
  console.log("You broke the highscore. Send me a screenshot to add your name to the highscore")}
              
  
              
                


