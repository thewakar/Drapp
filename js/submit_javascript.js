// Submit form with id function.
function submit_by_id() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
document.getElementById("form_id").submit(); //form submission
alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
}
}

// Submit form with name function.
function submit_by_name() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByName('form_name');
x[0].submit(); //form submission
alert(" Name : " + name + " n Email : " + email + " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
}
}

// Submit form with class function.
function submit_by_class() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByClassName("form_class");
x[0].submit(); //form submission
alert(" Name : " + name + " n Email : " + email + " n Form Class : " + document.getElementById("form_id").getAttribute("class") + "nn Form Submitted Successfully......");
}
}

// Submit form with HTML <form> tag function.
function submit_by_tag() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByTagName("form");
x[0].submit(); //form submission
alert(" Name : " + name + " n Email : " + email + " n Form Tag : <form>nn Form Submitted Successfully......");
}
}

// Name and Email validation Function.
function validation() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (name === '' || email === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else if (email.match(emailReg)) {
return true;
} else {
alert("Invalid Email...!!!!!!");
return false;
}
}
