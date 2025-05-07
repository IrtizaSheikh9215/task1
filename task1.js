function checkUser() {
    let name = prompt("Enter your Name");
    let age = prompt("Enter your age");
  
    if (age >= 18) {
      alert("Welcome " +  "! You are an adult.");
    } else {
      alert("Sorry " + " ! You are not allowed.");
    }
  }
  
  checkUser();
  