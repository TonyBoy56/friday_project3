////////////////////////////////// Back-end logic /////////////////////////////////////////////

// function to get range of int from zero to int //
// equal to stating "var range = function()" //
// Establish variables containing each string //
var integer = parseInt(value);
var zero = parseInt(0);
// store array in "x" //
var x = range(zero, integer);
var y = replace(x);
// console.log(x);
// console.log(y);

function range(zero, integer) {
  var array = [];   
  counter = zero;
  while (counter <= integer) {
    array.push(counter);
    counter++; // counter = counter + 1//
  }
  return array;
}

function replace(x) {
  // verify ifs else-ifs //
  // run a log on the for loop to ensure its duty //
  var array2 = [];
  var array2 = x
  for (var i = 0; i <= x; i++) {
    var newString = i.toString();
    if (newString.includes("3")) {
      array2[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (newString.includes("2")) {
      array2[i] = "Boop!";
    } else if (newString.includes("1")) {
      array2[i] = "Beep!";
    }
  }
  console.log(array2);
  return array2
}

////////////////////////////////// Front-end logic /////////////////////////////////////////////

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    // Store user-input in var "value" as string //
    var value = $("#input").val();
    $("#output1").append(x);
    $("#output2").append(y);
  });
});
