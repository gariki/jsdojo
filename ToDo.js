

var inputElement = document.getElementById("newToDo");
var todolist = document.getElementById("mylist");

inputElement.addEventListener("keyup", function ai(e){
    if(e.keyCode == 13){
        //push new todo item
        console.log("enter pressed event triggered.")
        var val = this.value;
        var node = document.createElement("li");
        var textnode = document.createTextNode(val);
        var node2 = document.createElement("span");
        
        node.appendChild(textnode);
        todolist.appendChild(node);
        

        
    }
});