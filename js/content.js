var dropdown = document.getElementById("drop1");
var dropdown2 = document.getElementById("drop2");
var dropdown3 = document.getElementById("drop3");

var sprite = document.getElementById("img1");
var sprite2 = document.getElementById("img2");
var sprite3 = document.getElementById("img3");
 

function movearrow(drp,spr){
    if(!drp.classList.contains("show")){
        spr.src = "./images/arrow.png";
    }else{
        spr.src = "./images/arrowd.png";
    }
}

// Dropdown Functions
function drop1() {
    dropdown.classList.toggle("show");
    movearrow(dropdown,sprite);
}
function drop2() {
    dropdown2.classList.toggle("show");
    movearrow(dropdown2,sprite2);
}
function drop3() {
    dropdown3.classList.toggle("show");
    movearrow(dropdown3,sprite3);
}
//---------------------
// Function to close dropdown manus

window.onclick = function(e) {
    if (!e.target.matches('#click')) {        
         if(dropdown.classList.contains("show") || dropdown2.classList.contains("show") || dropdown3.classList.contains("show") ){
             dropdown.classList.remove("show");
             movearrow(dropdown,sprite);
             dropdown2.classList.remove("show");
             movearrow(dropdown2,sprite2);
             dropdown3.classList.remove("show");
             movearrow(dropdown3,sprite3);
         }
    }
  }