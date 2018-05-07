

var inputElement = document.getElementById("newToDo");
var todolist = document.getElementById("mylist");

inputElement.addEventListener("keyup", function ai(e){
    if(e.keyCode == 13){
        //push new todo item
        console.log("enter pressed event triggered.")
        var val = this.value;
        var node = document.createElement("li");
        var textnode = document.createTextNode("<span>X</span>" + val);
        node.appendChild(textnode);   
      
    
        // var node2 = document.createElement("span");
        // var textnode2 = document.createTextNode("X");
        // node2.appendChild(textnode2);
        // todolist.appendChild(node2);
         todolist.appendChild(node);

        
    }
});