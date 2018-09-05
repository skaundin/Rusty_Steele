var age = prompt("Whats your age ?")
if(age < 0){
	console.log("Incorrect age")
}else if (age === 21)
{
	console.log("Happy Birthday\n");
}
else if(age % 2 != 0)
{
	console.log("Your age is odd!");
}
else(age % Math.sqrt(age)  === 0)
{
	console.log("Perfect Square");
}
