var myBtn = document.getElementsByTagName("button")[0];
var myBody = document.getElementsByTagName("body")[0];

myBtn.addEventListener("click", function (){
    myBody.classList.toggle("colorbg");
   
});

