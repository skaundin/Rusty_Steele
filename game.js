var secretNumber = 4;
var guess = Number(prompt("Guess a number"));


if(guess === secretNumber)
{
	alert("You guessed it correct");
}
else if(guess > secretNumber)
{
	alert("Too high , try again");
}
else
{
	alert("Too low, try again")
}