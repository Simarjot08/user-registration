let btn=document.querySelector("button");

btn.onclick=function (){
    let name=prompt("Enter your name");
    let email=prompt("Enter your email id ");
    let ans=confirm("confirm the information:-");
    if(ans==true)
    {
        alert("registration successfull");
    }
    else{
        alert("Registration cancelled");
    }
};