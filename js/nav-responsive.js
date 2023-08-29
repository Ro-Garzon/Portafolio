const bars = document.querySelector (".header__bars");


bars.onclick = function (){
    let nav = document.querySelector (".nav");
    nav.classList.toggle("nav-active");
}