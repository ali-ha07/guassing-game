
// alert("that is the the page u want");
// document.write("hello");
// console.log("yess!");
// var d=4;
// for(i=1;i<d;i++)
//     document.write("  hi ",+i);
// document.write("<br>");   //<br> --> \n
// var okay=true;       //okay is boolean: false or true only 
// if(okay)
// {
//     document.write("i am okay");
// } else
// {
//     document.write("i am sick");
// }



var correctN = Math.floor(Math.random() * 100) + 1;
if (correctN == 101) {
    correctN--;
}

var userIN = document.getElementById("Get");
var msg = document.getElementById("feedback");
var submitbutton = document.getElementById("button");
var numofgaussing = 0;
console.log(correctN);
submitbutton.addEventListener("click", function () {
    var value = parseInt(userIN.value);    //take the integer part, or transform any input to integer
    numofgaussing++;
    if (value < correctN) {
        msg.textContent = "lower, zedo shway";
    } else if (value > correctN) {
        msg.textContent = "higher, na2so shway";
    } else {
        msg.textContent = "Cograts!! 7zorto la 25o shlete " + correctN + " ba3d " + numofgaussing + " mo7awalet";
    }
});
