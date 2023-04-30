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