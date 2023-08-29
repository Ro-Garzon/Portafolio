
document.getElementById("form-sent").addEventListener("click", () => {
    let emergent = document.querySelector('.form__emergent');
    emergent.style.visibility = 'visible';
    emergent.style.opacity = 1;

    setTimeout(function() {
        emergent.style.opacity = 0;
        setTimeout(function() {
            mensaje.style.visibility = 'hidden';
            window.location = 'https://ro-garzon.github.io/Portafolio/#contact';
        }, 500);
    }, 3000);
});