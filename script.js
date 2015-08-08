// Step 3
function divideBy10(one) {
  var divided = Number(one) / 10;
}

// Step 4
function multiplyBy5(one) {
  var multiplied = Number(one) * 5;
}


function checktext(aboutstuff) {
  var numberVal document.getElementById(aboutstuff).value;
  if (numberVal === "") {
    alert("Input is Required");
  }
  else if (numberVal > 10000) {
    var y = divideBy10(numberVal);
    console.log(y);
  }
  else if (numberVal < 10000) {
    var z = multiplyBy5 (numberVal);
    console.log(z);
  }
  else {
    console.log("something went wrong!")
  }
}



