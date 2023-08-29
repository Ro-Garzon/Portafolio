const cards= document.querySelectorAll(".project__card");

cards.forEach((card) => {
    let btn_arrow =  card.querySelector(".project__arrow");
    let info_traslate = card.querySelector(".project__traslate");

    btn_arrow.addEventListener("click", () => {
        btn_arrow.classList.toggle("scale");
        info_traslate.classList.toggle("mov");
    })
})




