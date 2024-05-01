function Validate(inputField, display) {
    var input = document.getElementById(inputField);
    if (input.checked == "") {
        document.getElementById(display).style.visibility = "visible";
        input.style.border = "solid 2px red";
        return false;
    }
    return true;
}

function NumValidate() {
    var input = document.getElementById("phone");
    var regx = /^[8-9]\d{9}$/;

    if (!regx.test(input.value)) {
        document.getElementById("phoneAlert").style.visibility = "visible";
        input.style.border = "solid 2px red"
        return false;
    }
    else {
        return true;
    }
}

function EmailValidate() {
    var input = document.getElementById("email");

    var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regx.test(input.value)) {
        document.getElementById("emailAlert").style.visibility = "visible";
        input.style.border = "solid 2px red";
        return false;
    } else {
        return true;
    }
}
function namValidate() {
    var input = document.getElementById("name");
    if (input.checked == "") {
        document.getElementById("labelAlert").style.visibility = "visible";
        input.style.border = "solid 1px red";
        return false;
    }
    return true;
}

function GenderValidate() {
    var gd1 = document.getElementById("gd1");
    var gd2 = document.getElementById("gd2");
    var gd3 = document.getElementById("gd3");

    if(gd1.checked== false && gd2.checked==false && gd3.checked==false)
    {
        document.getElementById("genderAlert").style.visibility = "visible";
        return false;
    }
    return true;
}