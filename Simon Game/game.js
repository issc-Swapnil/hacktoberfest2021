let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStart = false;
let level = 0;

$(".btn").click(function()
{
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
} );

$(document).keydown(function(event)
{
  if (!gameStart)
  {
    gameStart = true;
    nextSequence();
    $("h1").text("Level " + level);
  }
} );

function nextSequence()
{
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // Flash
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  // Play audio
  playSound(randomChosenColor);
}

function playSound(name)
{
  // Audio
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor)
{
  $("#" + currentColor).addClass("pressed");
  setTimeout(function()
  {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    if (userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function()
      {
        nextSequence();
      }, 1000);
    }
  }
  else
  {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function()
    {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game over, press any key to restart");

    // Start Over
    startOver();
  }
}

function startOver()
{
  level = 0;
  gamePattern = [];
  gameStart = false;
}
