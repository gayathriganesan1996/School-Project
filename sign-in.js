
const signup = window.localStorage.getItem("Signup")
? JSON.parse(window.localStorage.getItem("Signup"))

:[];
console.log(signup);
function signinAccount(){
   

console.log(signup.username);
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
   
    let flag= true;
    if(username==""){
        document.getElementById("error-name").innerHTML="Please enter username";
        flag=false;
    }else{
        document.getElementById("error-name").innerHTML=" ";
    }
    if(password==""){
        document.getElementById("error-password").innerHTML="Please enter password";
        flag=false;
    }else{
        document.getElementById("error-password").innerHTML=" ";
        
    }
    if(flag)
{
    if(username==signup.username && password==signup.password){
  window.location.href="home.html"

     }else{
        alert('User name or password incorrect');
        flag=false;
    }
} 
}