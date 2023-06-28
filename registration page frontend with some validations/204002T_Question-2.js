// function for form varification
function formValidation() {

  // Select all input elements for varification
const userID = document.getElementById("userid");
const passID = document.getElementById("password");
const userName = document.getElementById("name");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const email = document.getElementById("email");
const gender = document.registration;
const language = document.getElementById("language");




  // checking length of userid
  if (userID.value.length < 5 || userID.value.length > 12) {
    alert("UserID length should be more than 5 and less than 12 charaters");
    userID.focus();
    return false;
  }

  // checking length of password
  if (passID.value.length < 7 || passID.value.length > 12) {
    alert("Password length should be more than 7 and less than 12 charaters");
    passID.focus();
    return false;
  }

  // checking username
  if(!userName.value.match(/^[A-Za-z]+$/)){
    alert("Name should be alphabates only");
    userName.focus();
    return false;
  }
  

  // checking country
  if (country.value === "") {
    alert("Please select your country!")
    return false;
  }

  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }

  // checking email format  
  if (!email.value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }

  // checking language
  if (language.lagnuage.value === "") {
    alert("Please select your language!")
    return false;
  }

  
  
  return true;
}