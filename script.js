

// print the values
// check continously while the user types
// if the user types a number, validate


function validate() {

    res = 1;
    document.getElementById("namefail").innerHTML = "";
    document.getElementById("regnofail").innerHTML = "";
    document.getElementById("phnofail").innerHTML = "";
    document.getElementById("emailfail").innerHTML = "";
    document.getElementById("passfail").innerHTML = "";
    document.getElementById("zipfail").innerHTML = "";
    document.getElementById("selectfail").innerHTML = "";

    // remove border shadows
    document.getElementById("regno").style.boxShadow = "none";
    document.getElementById("name").style.boxShadow = "none";
    document.getElementById("phno").style.boxShadow = "none";
    document.getElementById("email").style.boxShadow = "none";
    document.getElementById("pass").style.boxShadow = "none";
    document.getElementById("zip").style.boxShadow = "none";
    document.getElementById("event").style.boxShadow = "none";

    document.getElementById("regno").style.border = "";
    document.getElementById("name").style.border = "";
    document.getElementById("phno").style.border = "";
    document.getElementById("email").style.border = "";
    document.getElementById("pass").style.border = "";
    document.getElementById("zip").style.border = "";
    document.getElementById("event").style.border = "";

    let nam = document.forms["myform"]["name"].value;
    let regno = document.forms["myform"]["regno"].value;
    let phno = document.forms["myform"]["phno"].value;
    let email = document.forms["myform"]["email"].value;
    let password = document.forms["myform"]["pass"].value;
    let zip = document.forms["myform"]["zip"].value;
    nam = nam.trim();
    regno = regno.trim();
    phno = phno.trim();
    email = email.trim();
    password = password.trim();
    zip = zip.trim();
    const style = document.createElement("style")
    style.type = "text/css"
    const {
        sheet
    } = document.head.appendChild(style)

    const rule = sheet.insertRule("::placeholder {}")
    const placeholderStyle = sheet.rules[rule].style;
    placeholderStyle.color = "red";
    // check if no value selected from dropdown
    if (document.getElementById("event").value == "none") {
        // alert("Please select a event");
        document.getElementById("event").style.boxShadow = "0 0 5px red";
        document.getElementById("event").style.border = "2px solid red";
        document.getElementById("selectfail").innerHTML = "Please select a event";
        res = 0;
    }
    // no numbers in name
    digi = (nam.match(/[0-9]/g) || []).length;
    if (digi > 0) {
        document.getElementById("name").style.boxShadow = "0 0 5px red";
        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("namefail").visibility = "visible";
        document.getElementById("namefail").innerHTML = "Name cannot contain numbers";
        res = 0;
    }


    // zip should be 5 digits
    if (zip.length != 5) {
        // alert("Zip code should be 5 digits");
        document.getElementById("zip").style.boxShadow = "0 0 5px red";
        document.getElementById("zip").style.border = "2px solid red";
        document.getElementById("zipfail").visibility = "visible";
        document.getElementById("zipfail").innerHTML = "Zip code should be 5 digits";
        res = 0;
    }
    // allow email with only @vit.ac.in or @vitstudent.ac.in
    if (email.indexOf("@vit.ac.in") == -1 && email.indexOf("@vitstudent.ac.in") == -1) {
        // alert("Email should be of @vit.ac.in or @vitstudent.ac.in");
        document.getElementById("email").style.boxShadow = "0 0 5px red";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("emailfail").visibility = "visible";
        document.getElementById("emailfail").innerHTML = "Email should be of @vitstudent.ac.in";
        res = 0;
    }
    // allow only 10 digit phone number
    if (phno.length != 10) {
        // alert("Phone number should be 10 digits");
        document.getElementById("phno").style.boxShadow = "0 0 5px red";
        document.getElementById("phno").style.border = "2px solid red";
        document.getElementById("phnofail").visibility = "visible";
        document.getElementById("phnofail").innerHTML = "Phone number should be 10 digits";
        res = 0;
    }

    patternreg = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    // match the regno with the pattern
    if (!patternreg.test(regno)) {
        // make the border red
        document.getElementById("regno").style.boxShadow = "0 0 5px red";
        document.getElementById("regno").style.border = "2px solid red";
        document.getElementById("regnofail").visibility = "visible";
        document.getElementById("regnofail").innerHTML = "Improper Registraiton Number Format";


        res = 0;

    }
    //     Password conditions
    // a. At least 10 characters (and up to 100 characters)
    // b. 5 or more unique characters
    // c. At least 3 of the following: uppercase, lowercase, numeric, or special characters. The
    // allowed special characters are ~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ? [no spaces allowed!]
    let unique = 0;
    let upper = 0;
    let lower = 0;
    let numeric = 0;
    let special = 0;
    let spaces = 0;
    let specialChars = "~!@#$%^*-_=+[{]}/;:,?.";
    upper = (password.match(/[A-Z]/g) || []).length;
    lower = (password.match(/[a-z]/g) || []).length;
    numeric = (password.match(/[0-9]/g) || []).length;
    for (let i = 0; i < specialChars.length; i++) {
        if (password.indexOf(specialChars[i]) > -1) {
            special++;
            // 
        }
    }
    for (i = 0; i < password.length; i++) {
        if (password.indexOf(password[i]) == password.lastIndexOf(password[i])) {
            unique++;
        }

        // if(password[i] in specialChars){
        //     special++;
        // }
        if (password[i] == " ") {
            spaces++;
        }
    }
    if (unique < 5) {
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.borderColor = "2px solid red";
        document.getElementById("passfail").visibility = "visible";
        document.getElementById("eventselect").style.display = "block";
        document.getElementById("passfail").innerHTML = "Password should have atleast 5 unique characters";
        res = 0;
    }
    if (upper > 0) {
        upper = 1;
    }
    if (lower > 0) {
        lower = 1;
    }
    if (numeric > 0) {
        numeric = 1;
    }
    if (special > 0) {
        special = 1;
    }
    if (upper + lower + numeric + special < 3) {
        // alert("Password should have at least 3 of the following: uppercase, lowercase, numeric, or special characters");
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.border = "2px solid red";
        document.getElementById("passfail").style.visibility = "visible";
        document.getElementById("eventselect").style.display = "block";
        document.getElementById("passfail").innerHTML = "Password should have at least 3 of the following: uppercase, lowercase, numeric, or special characters";
        // document.getElementById("pass").value="";
        res = 0;
    }
    if(spaces>0){
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.borderColor = "2px solid red";
        document.getElementById("passfail").visibility = "visible" ;
        document.getElementById("eventselect").style.display = "block";
        document.getElementById("passfail").innerHTML = "Password should not contain spaces";
        res=0;
    }
    if (password.length < 10 || password.length > 100) {
        // alert("Password should be between 10 and 100 characters");
        // alert("Password should be between 10 and 100 characters");
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.borderColor = "2px solid red";
        document.getElementById("passfail").visibility = "visible";
        document.getElementById("eventselect").style.display = "block";
        document.getElementById("passfail").innerHTML = "Password should be between 10 and 100 characters";
        res = 0;
    }
    // regex for email
    let patternemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // match the email with the pattern
    if (!patternemail.test(email)) {
        // make the border red
        document.getElementById("email").style.boxShadow = "0 0 5px red";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("emailfail").visibility = "visible";
        document.getElementById("emailfail").innerHTML = "Improper Email Format";
        res = 0;
    }
    // regex for phone number
    let patternphno = /^[0-9]{10}$/;
    // match the phone number with the pattern
    if (!patternphno.test(phno)) {
        // make the border red
        document.getElementById("phno").style.boxShadow = "0 0 5px red";
        document.getElementById("phno").style.border = "2px solid red";
        document.getElementById("phnofail").visibility = "visible";
        document.getElementById("phnofail").innerHTML = "Phone number should be 10 digits";
        res = 0;
    }
    // zip code regex
    let patternzip = /^[0-9]{5}$/;
    // match the zip code with the pattern
    if (!patternzip.test(zip)) {
        // make the border red
        document.getElementById("zip").style.boxShadow = "0 0 5px red";
        document.getElementById("zip").style.border = "2px solid red";
        document.getElementById("zipfail").visibility = "visible";
        document.getElementById("zipfail").innerHTML = "Zip code should be 5 digits";
        res = 0;
    }

    if (nam == "") {
        // box shadow red
        document.getElementById("name").style.boxShadow = "0 0 5px red";
        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("namefail").visibility = "visible";
        document.getElementById("namefail").innerHTML = "Name cannot be empty";
        res = 0;
    }

    if (regno == "") {
        document.getElementById("regno").style.boxShadow = "0 0 5px red";
        document.getElementById("regno").style.border = "2px solid red";
        document.getElementById("regnofail").visibility = "visible";
        document.getElementById("regnofail").innerHTML = "Registration number cannot be empty";
        // alert("Registration number cannot be empty");
        res = 0;
    }
    if (phno == "") {
        // alert("Phone number cannot be empty");
        document.getElementById("phno").style.boxShadow = "0 0 5px red";
        document.getElementById("phno").style.border = "2px solid red";
        document.getElementById("phnofail").visibility = "visible";
        document.getElementById("phnofail").innerHTML = "Phone number cannot be empty";

        res = 0;
    }
    if (email == "") {
        // alert("Email cannot be empty");
        document.getElementById("email").style.boxShadow = "0 0 5px red";
        document.getElementById("email").style.border = "2px solid red";

        document.getElementById("emailfail").visibility = "visible";
        document.getElementById("emailfail").innerHTML = "Email cannot be empty";
        res = 0;
    }
    if (password == "") {
        // alert("Password cannot be empty");
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.border = "2px solid red";
        document.getElementById("passfail").visibility = "visible";
        document.getElementById("passfail").innerHTML = "Password cannot be empty";
        res = 0;
    }
    if (zip == "") {
        // alert("Zip code cannot be empty");
        document.getElementById("zip").style.boxShadow = "0 0 5px red";
        document.getElementById("zip").style.border = "2px solid red";
        document.getElementById("zipfail").visibility = "visible";
        document.getElementById("zipfail").innerHTML = "Zip code cannot be empty";
        res = 0;
    }

    if (res == 0) {
        return false;
    }
    else {
        return true;
    }


    // return true;
}