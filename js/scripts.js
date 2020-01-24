// Front-end logic //

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    // Store user-input in var "value" as string //
    var value = $("#input").val();
    //store "value" in var "range" as int //

    ///////////////////////////////////////////////////////////////////////////
    // Back-end logic //


    // function to get range of int from 0 to int //
    function range(start, end) {
      var ans = [];
      for (var i = start; i <= end; i++) {
        ans.push(i);
      }
      return ans;
    }
    var int = parseInt(value);
    var new_array = int.map(range);
    console.log(new_array);

  });
});
