function checkAge() {
  let text = document.getElementById("txtInput").value;
  let result = document.getElementById("res");

  if (isNaN(text)) {
    result.innerHTML = "You have not entered a number, please try again";
  }
  else {
    if (text < 18) {
      result.innerHTML = "Sorry you are to young";
    }
    else if (text > 66) {
      result.innerHTML = "Sorry you are to old";
    }
    else {
      result.innerHTML = "You are the right age! Congratz";
    }

  }
}

