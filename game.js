
var buttonColours =["red","yellow","green","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start=false;
if(level===0){
  $("h1").text("Press A Key to Start");
}
$(document).keydown(function(event){
  if(!start){
     nextSequence();
     start= true;
   }
}
);

function nextSequence(){
userClickedPattern =[];
level=level+1;
    $("h1").text("Level " +level);
    var num =Math.random();
  var randomNumber = Math.floor(num*4);
randomChosenColour =buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

console.log(randomChosenColour);
$("."+randomChosenColour).fadeOut(100).fadeIn(100);
//return randomChosenColour;
}





//var randomChosenColour=nextSequence();
//playSound(randomChosenColour);

//var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//  audio.play();
$(".btn").click(function(event){

  var userChosenColour =event.target.id;

  animatePress(userChosenColour);
  playSound(userChosenColour);

  userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
checkAnswer(userClickedPattern.length-1);
});

function playSound(userChosenColour){
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
}

function animatePress(userChosenColour){
  $("." +userChosenColour).addClass("pressed");
  setTimeout(function(){
$("." +userChosenColour).removeClass("pressed");
},100);}


function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

if (userClickedPattern.length === gamePattern.length){
        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);


}
    }else{
    console.log("FAILED!!!");
    playSound("wrong");

    $("."+"game-area").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
  setTimeout(function(){
  $("."+"game-area").removeClass("game-over");

},200);

startOver();
}

}


function startOver(){
  start= false;
  level=0;
  gamePattern=[];

}
