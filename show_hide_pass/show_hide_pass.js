const passwordfield = document.getElementById("password");
const showpassswordcheckbox = document.getElementById("showPassword");

showpassswordcheckbox.addEventListener("click", function() {
    if (showpassswordcheckbox.checked){
        passwordfield.type = "text";
    }else{
        passwordfield.type = "password";
    }
})