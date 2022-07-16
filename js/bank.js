document.getElementById("login-submit").addEventListener('click',function(){
    const emailfield=document.getElementById("user-email");
    const userEmail=emailfield.value;
    //get user password
    const passwordfield = document.getElementById("user-password");
    const userPassword=passwordfield.value;
    if (userEmail=="sayedasomiyanoor@gmail.com" && userPassword=="takade"){
        window.location.href='banking.html';
    }
})