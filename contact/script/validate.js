function validateForm() {
    resetFormError();
    let error = false;

    let name = document.forms["contact"]["name"].value;
    let surname = document.forms["contact"]["surname"].value;
    let email = document.forms["contact"]["email"].value;
    let msg = document.forms["contact"]["message"].value;

    let notEmptyMsg = "This field must not be empty.";

    if (name === "") {
        displayFormError("form-name-errorlabel", "form-name-input", notEmptyMsg);
        error = true;
    }

    if (surname === "") {
        displayFormError("form-surname-errorlabel", "form-surname-input", notEmptyMsg);
        error = true;
    }

    if (email === "") {
        displayFormError("form-email-errorlabel", "form-email-input", notEmptyMsg);
        error = true;

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        displayFormError("form-email-errorlabel", "form-email-input",
            "Please enter a valid email.");
        error = true;
    }

    if (msg === "") {
        displayFormError("form-message-errorlabel", "form-message-input", notEmptyMsg);
        error = true;
    }

    return !error;
}


function displayFormError(errorLabelId, inputId, errorMsg) {
    let errorLabel = document.getElementById(errorLabelId);
    errorLabel.innerHTML = errorMsg;
    errorLabel.classList.remove("invisible")
    document.getElementById(inputId).classList.add("error-input");
}


function resetFormError() {
    let inputs = ["form-name-input", "form-surname-input", "form-email-input", "form-message-input"];
    inputs.forEach((input) => {
        document.getElementById(input).classList.remove("error-input");
    });

    let labels = ["form-name-errorlabel", "form-surname-errorlabel", "form-email-errorlabel", "form-message-errorlabel"];
    labels.forEach((label) => {
        document.getElementById(label).classList.add("invisible")
    });


}