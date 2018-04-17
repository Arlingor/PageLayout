const nav = document.getElementById("myDropdown");
const nav1 = document.getElementById("myDropdown1");
const nav2 = document.getElementById("myDropdown2");
const nav3 = document.getElementById("myDropdown3");

const dropdown = document.getElementById("drop1");
const dropdown2 = document.getElementById("drop2");
const dropdown3 = document.getElementById("drop3");

const sprite = document.getElementById("img1");
const sprite2 = document.getElementById("img2");
const sprite3 = document.getElementById("img3");

function movearrow(drp,spr){
    if(!drp.classList.contains("show")){
        spr.src = "./images/arrow.png";
    }else{
        spr.src = "./images/arrowd.png";
    }
}
// Drobdown--------------------
function dropdownmenu() {
    nav.classList.toggle("show");
    
    if (nav.classList.contains("show")) {
        document.getElementById("drp").classList.add("b");
        nav1.classList.remove("show");
        nav2.classList.remove("show");
        nav3.classList.remove("show");
    }else{
        document.getElementById("drp").classList.remove("b");
    }

    if (document.getElementById("drp").classList.contains("b")) {
        document.getElementById("drp1").classList.remove("b");
        document.getElementById("drp2").classList.remove("b");
        document.getElementById("drp3").classList.remove("b");
    }
}
function dropdownmenu1() {
    nav1.classList.toggle("show");
    if (nav1.classList.contains("show")) {
        document.getElementById("drp1").classList.add("b");
        nav.classList.remove("show");
        nav2.classList.remove("show");
        nav3.classList.remove("show");
    }else{
        document.getElementById("drp1").classList.remove("b");
    }

    if (document.getElementById("drp1").classList.contains("b")) {
        document.getElementById("drp").classList.remove("b");
        document.getElementById("drp2").classList.remove("b");
        document.getElementById("drp3").classList.remove("b");
    }
}
function dropdownmenu2() {
    nav2.classList.toggle("show");
    if (nav2.classList.contains("show")) {
        document.getElementById("drp2").classList.add("b");
        nav.classList.remove("show");
        nav1.classList.remove("show");
        nav3.classList.remove("show");
    }else{
        document.getElementById("drp2").classList.remove("b");
    }

    if (document.getElementById("drp2").classList.contains("b")) {
        document.getElementById("drp").classList.remove("b");
        document.getElementById("drp1").classList.remove("b");
        document.getElementById("drp3").classList.remove("b");
    }
}
function dropdownmenu3() {
    nav3.classList.toggle("show");
    if (nav3.classList.contains("show")) {
        document.getElementById("drp3").classList.add("b");
        nav.classList.remove("show");
        nav2.classList.remove("show");
        nav1.classList.remove("show");
    }else{
        document.getElementById("drp3").classList.remove("b");
    }

    if (document.getElementById("drp3").classList.contains("b")) {
        document.getElementById("drp").classList.remove("b");
        document.getElementById("drp1").classList.remove("b");
        document.getElementById("drp2").classList.remove("b");
    }
}
//----------------------------------
// ---------------------
// Dropdown Sidebar
function dropside1() {
    dropdown.classList.toggle("show");
        if(dropdown.classList.contains("show")){
            dropdown2.classList.remove("show");
            dropdown3.classList.remove("show");
        }
        movearrow(dropdown,sprite);
}
function dropside2() {
    dropdown2.classList.toggle("show");
    if(dropdown2.classList.contains("show")){
        dropdown.classList.remove("show");
        dropdown3.classList.remove("show");
    }
    movearrow(dropdown2,sprite2);
}
function dropside3() {
    dropdown3.classList.toggle("show");
    if(dropdown3.classList.contains("show")){
        dropdown.classList.remove("show");
        dropdown2.classList.remove("show");
    }
    movearrow(dropdown3,sprite3);
}

//-------AJAX--------------
  
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', 'http://webwork.s3.amazonaws.com/interview-tests/MOCK_DATA.json', true); // CORS Problem
xhr.send();
//------------------------

