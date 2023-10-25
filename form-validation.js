function validateForm() {
    
    var email = document.getElementById("patientEmail").value;
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    return true;
}
