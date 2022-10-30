var listToDo = new Array();
var savedString = new String();

window.onload = function() {
    var buttonAddToDo = document.getElementById("addNewToDo");
    var buttonResetTextArea = document.getElementById("resetRandomNotes");
    buttonAddToDo.addEventListener("click", createNewTodo);
    buttonResetTextArea.addEventListener("click", resetRandomNotes)
}

function drawUIElements(){

}

function createNewTodo() {
    var userInput = document.getElementById("inputNewToDoItem").value;
    console.log(userInput);
    if(userInput != 0){
        listToDo.push(userInput)
        drawUIElements()
        createNewToDoUIElement(userInput)
    }
    userInput.value = ""
}

function createNewToDoUIElement(userInput){ 
    var ul = document.getElementById("unorderedList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput))
    

    //create Delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function() {
        const index = listToDo.indexOf(userInput);
        if( index >= 0){
            listToDo.splice(index, 1);
        }
        console.log(listToDo);
        this.parentElement.remove();
    })    
    li.appendChild(deleteButton);
    ul.appendChild(li);
}
function resetRandomNotes(){ 
    var randomNotes = document.getElementById("randomNotes");
    randomNotes.value = "";
}

//todo
//1. chrome.storage
//2. figure out "edit" functionality
//3. front end ? 