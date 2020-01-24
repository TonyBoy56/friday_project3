$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // Store user-input in var "value" as string //
    var value = $("#input").val();
    //store "value" in var "range" as int //
    var int = parseInt(value);
    var range = range(0, int);
    
  });
});