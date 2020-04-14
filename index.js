var gamepattern=[];
var userClickedPattern=[];
var buttoncolor= ["red","blue","green","yellow"];
var level=0;
var started = false;

$("#b1").on({click:function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
}});
function nextSequence() {
   userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomchosencolor=buttoncolor[randomNumber];
  gamepattern.push(randomchosencolor);
    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
makeSound(randomchosencolor);
}

function animation(currentColor)
{
   $("#"+currentColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
}





  $(".btn").click( function() {


var userchossencolor=$(this).attr("id");
makeSound(userchossencolor);
userClickedPattern.push(userchossencolor);
animation(userchossencolor);
  checkAnswer(userClickedPattern.length-1);
  }

  );

function makeSound(userchossencolor)
{
  switch (userchossencolor) {
    case "blue":
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      break;
    case "green":
      var kick = new Audio('sounds/green.mp3');
      kick.play();
      break;
    case "red":
      var snare = new Audio('sounds/red.mp3');
      snare.play();
      break;
    case "yellow":
      var tom1 = new Audio('sounds/yellow.mp3');
      tom1.play();
      break;
      case "wrong":
        var tom2= new Audio('sounds/wrong.mp3');
        tom2.play();
        break;


  }}

function checkAnswer(currentLevel) {

    if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamepattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      makeSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over");
      $("h1").append(" <button id='b2' class='bulb  btn-block btn-dark' type='button' >replay</button>").on({click:function() {
     $("body").removeClass("game-over");
     location.reload(true);

      }});

    }
}
