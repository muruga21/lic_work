// navbar section 



const sub_menu = document.querySelector(".right-side");

function show(){
  sub_menu.style.right="0px";
}
function hide(){
  sub_menu.style.right="-45%";
}






// js code for plus and minus flip plan secton


const coll = document.getElementsByClassName('collap');

let i;

for( i = 0; i < coll.length; i++ ){
    coll[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }else{
            content.style.display = 'block';
        }
    });
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}