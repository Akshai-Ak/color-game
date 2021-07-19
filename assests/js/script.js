var num = 6;
var container = document.getElementById("container");
var rgbCode = document.getElementById("rgbCode");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
//Generating Boxes
// let box
//     function square () {
//      box=[];
//      for (var i = 0; i < num; i++){
//      let newDiv = document.createElement("div"); 
//      newDiv.classList.add('square')
//      box.push(newDiv)
//      container.appendChild(newDiv);
//  }
// }
// square();
// //Generating random color
//     function diffColor() {
//     let r=Math.trunc(Math.random()*256)
//     let g=Math.trunc(Math.random()*256)
//     let b=Math.trunc(Math.random()*256)
//     return ( "rgb(" + r +", " + g + ", " + b +")"); 
// }
// diffColor();
// //Pushing colors in array
//     function randomColors(num){
//     var arr = []
//     for (var i = 0; i < num; i++) {
//     arr.push(diffColor())
//     }
//     return(arr); 
// }
// let colors = randomColors(num);

// //Applying colors to all squares
//     let allSquare=function () {
//     box.forEach((element,i) => {
//     element.style.background = colors[i];
//     });
// }
//  allSquare();
// //color shortcuts
//     function colorShortcut() {
//     colors = randomColors(num);
//     correctColor = colorGuess();
//     rgbCode.textContent = correctColor;
//   }
// //Easy Button
//     easy.addEventListener("click", function(){
//     hard.classList.remove("selected");
//     easy.classList.add("selected");
//     num = 3;
//     colorShortcut();
//     box.forEach((element,i) => {
//       if (colors[i]) {
//         element.style.background = colors[i];
//       } else {
//         element.style.display = "none";
//       }
//     })
// });

// //Hard Button
//     hard.addEventListener("click", function(){
//     easy.classList.remove("selected");
//     hard.classList.add("selected");
//     num =6;
//     colorShortcut();
//     box.forEach((element,i)=> {
//     element.style.background = colors[i];
//     element.style.display = "block";
//     });
// });

// //Guesing a color
//     function colorGuess(){
//     let  random = Math.floor(Math.random() *num)
//     return colors[random]    
//     }
//     var correctColor = colorGuess();
//     rgbCode.textContent = correctColor;
 
// //looping all squares
//     for(var i = 0; i < num; i++) {
//     box[i].addEventListener("click", function() {
//     var clickedColor = this.style.background;
//     if (clickedColor === correctColor) {
//         message.textContent = "You Won";
//         resetButton.textContent = "Play Again ?";
//         h1.style.background = clickedColor;
//         changeColors(clickedColor);
//     }else{
//         this.style.background = "black";
//         message.textContent = "Try Again";
//         }
//     })
//   }
// //Reset Button
//       resetButton.addEventListener("click", function(){
//         colorShortcut();
//         rgbCode.textContent = correctColor;
//         this.textContent = "New Color";
//         message.textContent = "";
//         box.forEach((element,i)=>{
//         element.style.background = colors[i];
//         })
//         h1.style.background = "cornflowerblue";
//       })
// //changing colors for all square after selecting the correct one
//       function changeColors(color){
//           box.forEach((element)=>{
//          element.style.background = color;
//       })
//       }
      
/*jquery*/ 



//Generating random color
    function diffColor() {
    let r=Math.trunc(Math.random()*256)
    let g=Math.trunc(Math.random()*256)
    let b=Math.trunc(Math.random()*256)
    return ( "rgb(" + r +", " + g + ", " + b +")"); 
}
diffColor();

//Pushing colors in array
    function randomColors(num){
    var arr = []
    for (var i = 0; i < num; i++) {
    arr.push(diffColor())
    }
    return(arr); 
}
let colors = randomColors(num);
//creating squares
let sq
    function square () {
     for (var i = 0; i < num; i++){
          let div=$("<div class='square'></div>")
          div.appendTo("#container")
           sq=$(".square")
          $(sq[i]).css("background-color",colors[i])
 }
}
square();


//clicking the sqaure
$(".square").click(function(){
  $(this).each(function() {
  let clickedColor=$(this).css("background-color");
  if (clickedColor === correctColor) {
      $("#message").text("You Won")
      $("#reset").text("Play Again ?")
      $("h1").css("background-color",clickedColor)
        changeColors(clickedColor); 
}
    else{
        $(this).css("background-color","black")
        $("#message").text( "Try Again");
    }
})
})

function changeColors(color){
    $(".square").each(function(){
    $(this).css("background-color",color) ;
    })
}

    function colorGuess(){
    let  random = Math.floor(Math.random() *num)
    return colors[random]    
    }
    var correctColor = colorGuess();
    rgbCode.textContent = correctColor;

// //Easy Button

$("#easy").click(function(){
         hard.classList.remove("selected");
        easy.classList.add("selected");
        num = 3;
        colorShortcut();
         for(i=0;i<sq.length;i++) {
          if (colors[i]) {
          $(sq[i]).css("background-color",colors[i])
          } else {
            sq[i].style.display = "none";
            $(sq[i]).css("display","none")
          }
        }
        clearInterval(timer)
        countdown()
});
// //Hard Button
$("#hard").click(function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    num =6;
    colorShortcut();
    for(i=0;i<sq.length;i++)  {
    $(sq[i]).css("background-color",colors[i])
    $(sq[i]).css("display","block")
    clearInterval(timer)
    countdown()
    };
});
//reset
$("#reset").click(function(){
    colorShortcut();
    $(this).text("New Color")
    $("#message").text("")
    for(i=0;i<sq.length;i++){
    $(sq[i]).css("background-color",colors[i])
    clearInterval(timer)
    countdown()
    }
    $("h1").css("background-color","cornflowerblue")
})

 //color shortcuts
    function colorShortcut() {
    colors = randomColors(num);
    correctColor = colorGuess();
    $("#rgbCode").text(correctColor) 
  }
//count down
let timer
function countdown() {
const start=01;
let time=start*60;
timer=setInterval(update,1000)
function update() {
    let min=Math.floor(time/60)
    let sec=time%60
    if(sec>9){
    $("#timeClock").text(min +":" +sec)
    time++
}
    else{
    $("#timeClock").text("0"+min +":"+"0" +sec)
    time++
     }
    }
}
countdown()

  $(".stop").click(function () {
    hard.classList.remove("selected");
    easy.classList.remove("selected");
      clearInterval(timer)
  })