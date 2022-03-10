const FormValidate = () => {
    let textInput = document.querySelector('input[id=username]')
    let emailInput = document.querySelector("input[id=email]");
    let password1Input = document.querySelector("input[id=pass]")
    let password2Input = document.querySelector("input[id=pass2]")
    let submitBtn = document.querySelector(".login")
    // message errors
    let msgError1 = document.querySelector(".msg-error1");
    let msgError2 = document.querySelector(".msg-error2")
    let msgError3 = document.querySelector(".msg-error3")
    let msgError4 = document.querySelector(".msg-error4")
    doSubmit = () => {
        // send data
        let submittedValues = [textInput, emailInput, password1Input, password2Input];
        submittedValues.map((item) => {
            item.value = "";
        })
    }
    let fieldCheck = (item, msgerror, name, icon) => {
        let a = true;
        item.classList.remove("green")
        item.classList.remove("red")
        let redIcon = document.querySelector(`.${icon}a`)
        let greenIcon = document.querySelector(`.${icon}`)
        redIcon.classList.remove("displayinl");
        greenIcon.classList.remove("displayinl");
        if (item.value.trim() === "") {
            msgerror.innerText = "";
            msgerror.innerText = `${name} cannot be empty`
            msgerror.classList.add("displayinl")
            a = false;
        } else {
            if (item === password2Input && password1Input.value !== password2Input.value) {
                a = false
                return;
            }
            msgerror.innerText=""
            msgerror.classList.remove("displayinl")
        }
        return a;
    }
    let inputCheck = (input, error, msgP, icon) => {
        let correctValue = () => {
            input.classList.remove("red")
            input.classList.add("green")
            msgP.innerText = "";
            msgP.classList.remove("displayinl")
            document.querySelector(`.${icon}a`).classList.remove("displayinl")
            document.querySelector(`.${icon}`).classList.add("displayinl")
        }
        let wrongValue = () => {
            input.classList.add("red")
            input.classList.remove("green")
            msgP.innerText = error;
            msgP.classList.add("displayinl")
            document.querySelector(`.${icon}`).classList.remove("displayinl")
            document.querySelector(`.${icon}a`).classList.add("displayinl")
        }
        input.addEventListener("blur", () => {
            if (input.value.trim() !== "") {
                if (input === password2Input) {
                    if (password1Input.value === password2Input.value) {
                        correctValue();
                    } else {
                        wrongValue();
                    }
                } else {
                    correctValue();
                }
            } else {
                wrongValue();
            }
        })
    }
    emptyFieldCheck = () => {
        let field1= fieldCheck(textInput, msgError1, "Username", "icon1");
        let field2= fieldCheck(emailInput, msgError2, "Email", "icon2");
        let field3= fieldCheck(password1Input, msgError3, "Password", "icon3");
        let field4= fieldCheck(password2Input, msgError4, "Confirm password field", "icon4")
        return (field1 && field2 &&field3 && field4)
    }
    inputCheck(textInput, "Please input correct username", msgError1, "icon1")
    inputCheck(emailInput, "Please input correct email", msgError2, "icon2");
    inputCheck(password1Input, "Please input correct password", msgError3, "icon3");
    inputCheck(password2Input, "Passwords are not matching", msgError4, "icon4");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let check = emptyFieldCheck()
        if (check === true) return doSubmit()
    })
}

FormValidate()
