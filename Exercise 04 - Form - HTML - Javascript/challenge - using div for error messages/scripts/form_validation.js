function validateForm() {

    var errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "";
    var noErrors = true;
    //locates an html element with the id 'application'
    var shortApplicationTextArea = document.getElementById("application");
    if (shortApplicationTextArea.value.length < 15) {
        errorDiv.innerHTML = "Your 'short application' must be longer than 15 characters.<br/>";
        noErrors = false;
        
    }
    //locates an input that fulfills the requirement that its name is 'work_hours' 
    //and it is in the state 'checked'
    var flexibilityWorkHours = document.querySelector("input[name='work_hours']:checked");
    if (flexibilityWorkHours.value == "default") {
        alert("Standing up for yourself and not working long hours is great! Good for you!");
    }

    //locates all inputs with the name 'field_of_interest", which are checked
    var checkedAreasOfInterest = document.querySelectorAll("input[name='field_of_interest']:checked");
    if (checkedAreasOfInterest.length === 0) {
        errorDiv.innerHTML += "You must choose at least one area of interest!<br/>";
        noErrors = false;
    }

    if (document.applicationform.name.value.toLowerCase() === "anders heilsberg") {
        alert("All HAIL Anders, the inventor of C#!");
    }
    return noErrors;
}