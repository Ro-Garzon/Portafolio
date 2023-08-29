
document.getElementById("form-sent").addEventListener("click", () => {
    let emergent = document.querySelector('.form__emergent');
    emergent.style.visibility = 'visible';
    emergent.style.opacity = 1;

    setTimeout(function() {
        emergent.style.opacity = 0;
        setTimeout(function() {
            mensaje.style.visibility = 'hidden';
            window.location = 'http://127.0.0.1:5501/index.html#contact';
        }, 500);
    }, 3000);
});