
function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["type"].value;
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Coffee type must be filled out");
        return false;
      }
  }

  function myFunction(){
    alert("Order Successfull !");
  }