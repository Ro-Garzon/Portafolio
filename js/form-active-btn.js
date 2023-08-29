function activeBtn(){
    const inputName = document.getElementById("name").value;
    const inputEmail = document.getElementById("email").value;
    const inputAsunto = document.getElementById("subject").value;
    const inputMensaje = document.getElementById("message").value;
    
    if ((inputName != "") && (inputEmail != "") && (inputAsunto != "") && (inputMensaje != "")){  
        document.getElementById("form-sent").disabled = false;
    }else{
        document.getElementById("form-sent").disabled = true;
    }

}


document.getElementById("name").addEventListener("keyup", activeBtn);
document.getElementById("email").addEventListener("keyup", activeBtn);
document.getElementById("subject").addEventListener("keyup", activeBtn);
document.getElementById("message").addEventListener("keyup", activeBtn);
