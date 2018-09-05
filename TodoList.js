console.log("connected");

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

	choice = prompt("Which option");

}

console.log("OK, QUI THE APP")

function listTodos()
{
	console.log("*********");
		array.forEach(function(array, index){
		
			console.log(index + ": " + array);
			
		});
		console.log("*********");

}

function deleteTodo()
{
	var deleteElem = prompt("Which todo index to remove")
	array.splice(deleteElem, 1);
	console.log(array);
}

function addTodo()
{
	var list = prompt("What is the todo");
	array.push(list);
	console.log(array);

}