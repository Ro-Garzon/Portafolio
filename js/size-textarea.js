const textarea = document.querySelector(".input-group__input--textarea");
        
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "30px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});