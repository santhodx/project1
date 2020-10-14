
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["femail"].value;
    var z = document.forms["myForm"]["ftext"].value;
    if (x  == "") {
      alert("Please fill out every box to submit request");
      return false;
      
    }
    else if(y == ""){alert("Please fill out every box to submit request");
      return false;}
    
    else if(z == ""){alert("Please fill out every box to submit request");
    return false;}
    
    else
      {alert("Form has been successfully submitted");}
  }