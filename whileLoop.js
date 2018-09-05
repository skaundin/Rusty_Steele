console.log("Print all numbers between -10 and 19");
var num1 = -10;
var num2 = 19;
var num = 18;
while(num < num2 && num > num1)
{
	console.log(num);
	num--;
}

console.log("Print all even numbers between 10 and 40");
var num1 = 10;
var num2 = 40;

while(num1 < num2)
{
	console.log(num1);
	num1 = num1 + 2;

}



console.log("Print all odd numbers between 300 and 333");
var num1 = 300;
var num2 = 333;

while(num1 < num2)
{
	if(num1 % 2 !=0){
	console.log(num1);}
	num1++;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var num1 = 5;
var num2 = 50;
while(num1 < num2)
{
	if((num1 % 5 === 0 ) && ( num1 % 3 === 0)){
	console.log(num1);}
	num1++;

}

var answer = prompt ("are we there yet");
while((answer !== "yes") && (answer !== "yeah"))
{
	prompt("are we there yet");
}

alert("We made it");