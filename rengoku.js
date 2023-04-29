var sub_items = document.querySelector(".tut-nav-sub-item");

let fl = 0;

function showmenu(element){
  fl = 1 - fl;
  if(fl==1){
    sub_items.classList.remove("invisible");
    sub_items.classList.add("show");
    
  }
  else{
    sub_items.classList.remove("show");
    sub_items.classList.add("invisible");
  }
}
const sub_menu = document.querySelector(".w-nav-menu");

function show(){
  sub_menu.style.right="0";
}
function hide(){
  sub_menu.style.right="-200px";
}

// slide code


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

/*let slider_img = document.getElementsByClassName("myslides");
let i = 0;
function show_slide_img(){
  if(i==3){
    i = 0;
  }
  for(i = 0;i<slider_img.length;i++){
    slider_img[i].style.display = "none";
  }
  slider_img[i].style.display = "block" ;
  i+=1;
}*/
let slider_img = document.querySelectorAll(".myslides");
let v = 0;
function change_image(){
  if(v==3){
    v = 0;
  }
  for(let i=0;i<slider_img.length;i++){
    slider_img[i].style.display = "none";
  }
  slider_img[v].style.display = "block";
  v+=1;
}



function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".myslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

setInterval(change_image,2000);