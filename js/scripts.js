////////////////////////////////// Back-end logic /////////////////////////////////////////////

// Function to find the range of user-input and replace values of an array with string phrases. //
function rangeAndReplace(inputtedInteger) {
  var array = [];
  for (var i = 0; i <= inputtedInteger; i++) {
    array.push(i);
  }

  for (var counter = 0; counter <= inputtedInteger; counter++) {
    var newString = counter.toString();
    if (newString.includes("3")) {
      array[counter] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (newString.includes("2")) {
      array[counter] = "Boop!";
    } else if (newString.includes("1")) {
      array[counter] = "Beep!";
    }
  }
  return array;
}

////////////////////////////////// Front-end logic /////////////////////////////////////////////

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var inputtedInteger = parseInt($("#input").val());
    $("#output1").text(rangeAndReplace(inputtedInteger));
  });
});
