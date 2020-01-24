// Front-end logic //

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    // Store user-input in var "value" as string //
    var value = $("#input").val();
///////////////////////////////////////////////////////////////////////////
    // Back-end logic //
    

    // function to get range of int from zero to int //
    var range = function(zero, integer) {
      var array = [];
      counter = zero;

      while (counter <= integer) {
        array.push(counter);
        counter++;
      }
      return array;
    };

    var integer = parseInt(value);
    var zero = parseInt(0);

    var x = range(zero, integer);
    console.log(x);
  });
});
