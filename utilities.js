//returns random number between 0 and 255 inclusive.
function randCode(){
    var j = Math.floor((Math.random()*1000)%256);
    console.log(j);
    return j;
}

//returns random between 0 and max less than a thousand.
function myRand(max){
    var j = Math.floor((Math.random()*1000)%(max+1));
    console.log(j);
    return j;
}

function generateRGB(){
    var mycolor = {};
    mycolor.r = randCode();
    mycolor.g = randCode();
    mycolor.b = randCode();
    console.log(mycolor);
    return mycolor;
}

// for(let i=0; i<50;i++){
//     generateRGB();
//     myRand(5);
// }


