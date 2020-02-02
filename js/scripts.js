////////////////////////////////// Back-end logic /////////////////////////////////////////////

// Function to find the range of user-input and replace values of an array with string phrases. //
function rangeAndReplace(inputtedInteger) {
  var array = [];
  // create the first for-loop strictly for the purpose of pushing the counter into the empty array. //
  for (var i = 0; i <= inputtedInteger; i++) {
    array.push(i);
  }

  // This second for-loop negates the need for second function. It lives in the present function and uses a NEW counter to track elements in the original array. //
  for (var counter = 0; counter <= inputtedInteger; counter++) {
    // Define a variable that will store every element that "counter" has found as a string element as it finds it while passing the for-loop. // 
    var newString = counter.toString();

    // The following lines pertain to the same concept of change: If what is found in "newString" array includes a 3, 2, 1, then change those values to this specified phrase and stick it back in the original array. //
    if (newString.includes("3")) {
      array[counter] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (newString.includes("2")) {
      array[counter] = "Boop!";
    } else if (newString.includes("1")) {
      array[counter] = "Beep!";
    }
  }
  // return the new array as part of the function. //
  return array;
}

////////////////////////////////// Front-end logic /////////////////////////////////////////////

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var inputtedInteger = parseInt($("#input").val());
    // A line that specified the declaration of rangeAndAreplace function was removed. This is already being done in the jquery #output.text line in parenthesis. //
    $("#output1").text(rangeAndReplace(inputtedInteger));
  });
});