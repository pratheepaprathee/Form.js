const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateForm()
{
    clearMessages();
    let errorFlag=false;
    if(nameInput.value.length<3)
    {
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid Email";
        email.classList.add("error-border");
        errorFlag=true;
    }
    if(!checkpassword(password.value))
    {
        errorNodes[2].innerText="Password must contain 8 Characters\nMust be one uppercase & lowercase\nMust be one Special Characters\nMust be contain one digit";
        password.classList.add("error-border");
        errorFlag=true;
    }
    if(message.value.length<1)
    {
        errorNodes[3].innerText="Enter the proper message";
        message.classList.add("error-border");
        errorFlag=true;
    }
    if(errorFlag==false)
    {
        success.innerHTML="Form Validation Successful";
    }
}

function clearMessages()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }
    success.innerText=" ";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}
function checkpassword(password)
{
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}