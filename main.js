const loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", function () {
    const emailFild = document.getElementById("floatingInput");
    const passfild = document.getElementById("floatingPassword");
    const password = passfild.value;
    const email = emailFild.value;
    if (email === "mirfaisal08@gmail.com" && password === "onektaka") {
        location.href = "bank.html";
    }
    else {
        alert("Please check your Email address and Password")
    }
    //console.log(email);
})