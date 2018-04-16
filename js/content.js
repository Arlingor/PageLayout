// Dropdown Functions
function drop1() {
        document.getElementById("drop1").classList.toggle("show");
}
function drop2() {
    document.getElementById("drop2").classList.toggle("show");
}
function drop3() {
    document.getElementById("drop3").classList.toggle("show");
}
//---------------------
// Function to close dropdown manus
var dropdown = document.getElementById("drop1");
var dropdown2 = document.getElementById("drop2");
var dropdown3 = document.getElementById("drop3");

window.onclick = function(e) {
    if (!e.target.matches('#click')) {        
         if(dropdown.classList.contains("show") || dropdown2.classList.contains("show") || dropdown3.classList.contains("show") ){
             dropdown.classList.remove("show");
             dropdown2.classList.remove("show");
             dropdown3.classList.remove("show");
         }
    }
  }