const password = document.getElementById("password");

// Length
const lengthIcon = document.getElementById("lengthIcon");
const lengthText = document.getElementById("lengthText");

// Uppercase
const uppercaseIcon = document.getElementById("uppercaseIcon");
const uppercaseText = document.getElementById("uppercaseText");

// Lowercase
const lowercaseIcon = document.getElementById("lowercaseIcon");
const lowercaseText = document.getElementById("lowercaseText");

// Number
const numberIcon = document.getElementById("numberIcon");
const numberText = document.getElementById("numberText");

password.addEventListener("input", () => {

    const value = password.value;

    updateRule(
        value.length >= 8,
        lengthIcon,
        lengthText
    );

    updateRule(
        /[A-Z]/.test(value),
        uppercaseIcon,
        uppercaseText
    );

    updateRule(
        /[a-z]/.test(value),
        lowercaseIcon,
        lowercaseText
    );

    updateRule(
        /[0-9]/.test(value),
        numberIcon,
        numberText
    );

});

function updateRule(isValid, icon, text) {

    if (isValid) {

        icon.classList.remove(
            "border-gray-400"
        );

        icon.classList.add(
            "bg-green-500"
        );

        text.classList.remove(
            "text-gray-400"
        );

        text.classList.add(
            "text-gray-700"
        );

    } else {

        icon.classList.remove(
            "bg-green-500"
        );

        icon.classList.add(
            "border-gray-400"
        );

        text.classList.remove(
            "text-gray-700"
        );

        text.classList.add(
            "text-gray-400"
        );

    }

}

// For confirm password

confirmPassword.addEventListener("input", () => {

    
    if (confirmPassword.value === "") {

        confirmPassword.classList.remove(
            "border-green-500",
            "border-red-500"
        );

        return;
    }

    if (password.value === confirmPassword.value) {

        confirmPassword.classList.remove("border-red-500");
        confirmPassword.classList.add("border-green-500");

    } else {

        confirmPassword.classList.remove("border-green-500");
        confirmPassword.classList.add("border-red-500");

    }

});

//For toggle 
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }

});
