const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pwd');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});



function validate() {
    var username = document.getElementById("uname");
    var password = document.getElementById("pwd");
    var confirm_pwd = document.getElementById("cpwd");
    var email = document.getElementById("email");
    var email_label = document.getElementById("lb_email");
    var user_label = document.getElementById("lb_uname");
    var pwd_label = document.getElementById("lb_pwd");
    var cpwd_label = document.getElementById("lb_cpwd");

    user_label.style.visibility = "hidden";
    email_label.style.visibility = "hidden";
    pwd_label.style.visibility = "hidden";
    cpwd_label.style.visibility = "hidden";

    
    if (username.value.trim() == "") {
        user_label.style.visibility = "visible";
        return false;
    }
        else if (email.value.trim() == "") {
            email_label.style.visibility = "visible";
            return false; 
        }
        else if (password.value.trim().length<8) {
            pwd_label.style.visibility = "visible";
            return false;
        }
        else if (confirm_pwd.value != password.value) {
            cpwd_label.style.visibility = "visible";
            return false;
        }
        
        
    else {
        return true;
    }
}