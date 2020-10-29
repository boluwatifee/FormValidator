getValidation = () => {
var firstName = document.forms["myform"]["firstname"]; 
var lastName = document.forms["myform"]["lastname"];
var email = document.forms["myform"]["email"]; 
var password = document.forms["myform"]["password"];  

if (firstName.value == "") { 
    window.alert("Please enter your first name."); 
    name.focus(); 
    return false; 
} 

if (lastName.value == "") { 
    window.alert("Please enter your last name."); 
    address.focus(); 
    return false; 
} 

if (email.value == "") { 
    window.alert( 
      "Please enter a valid e-mail address."); 
    email.focus();  
    return false; 
} 

if (password.value == "") { 
    window.alert("Please enter your password"); 
    password.focus(); 
    return false; 
} 
return true;
}