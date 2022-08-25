const Signup = [];

function CreateAccount(){
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    let flag=true;
    if(username==""){
        document.getElementById("error-name").innerHTML = "Please enter the name";
        flag=false;
    }else{
        document.getElementById("error-name").innerHTML = " ";
    }
    if(email==""){
        document.getElementById("error-email").innerHTML = "Please enter the email";
        flag=false;

    }else{
        document.getElementById("error-email").innerHTML = " ";

    }
    if(password==""){
        document.getElementById("error-password").innerHTML = "Please enter the password";
        flag=false;
    }
    else{
        document.getElementById("error-password").innerHTML = " ";
        
    }
    if(confirmpassword==""){
        document.getElementById("error-confirmpassword").innerHTML = "Please enter the password";
        flag=false;

    }else if(password!=confirmpassword){
        document.getElementById("error-confirmpassword").innerHTML = "Please enter correct password ";
        flag=false;
    }
    else{
        document.getElementById("error-confirmpassword").innerHTML = "";
    }

    if(flag){
        const signup = {
            username: username,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
    
        };
        Signup.push(signup);
        console.log(signup);
        window.localStorage.setItem("Signup", JSON.stringify(signup));  
        window.location.href = "sign_in.html";
        return true;
    }else{
        return false;

    }
 
}