var a = setInterval(function() {

var array = [];

var choice = prompt("Which option");




while(choice !== "quit")
{
	if(choice === "new")
	{
		addTodo();
	}
	else if (choice === "list")
	{
		listTodos();
	}
	else if(choice === "delete")
	{
		deleteTodo();
	}

	choice = prompt("Which option you would like to choose?");

}

console.log("OK, QUI THE APP")

function listTodos()
{
	console.log("*********");
		array.forEach(function(array, index){
		
			console.log(index + ": " + array);
			alert(index + ": " + array);
			
		});
		console.log("*********");

}

function deleteTodo()
{
	var deleteElem = prompt("Which todo index to remove from the list")
	array.splice(deleteElem, 1);
	console.log(array);
	alert(array);
}

function addTodo()
{
	var list = prompt("What is the todo you'd like to add to the list");
	array.push(list);
	console.log(array);
	alert(array);

}

// clearInterval(this.a); // can also try this
 clearInterval(a);
},500);