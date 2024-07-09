const ham= document.querySelector(".hamburger");
const responsive= document.querySelector(".responsive");
const cross= document.querySelector(".cross");

ham.addEventListener('click',(e)=>{
    responsive.classList.add('responsive-nav');
    e.stopPropagation;
}
)
cross.addEventListener('click',()=>{
    responsive.classList.remove('responsive-nav');
    ;
})
