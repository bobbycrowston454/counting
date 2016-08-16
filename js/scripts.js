$(function(){
  $("form").submit(function(event){
    var numInput = parseInt($("#numInput").val());
    var numCount = parseInt($("#numCount").val());

    if (numCount > numInput){
      alert("Please enter an amount less than your Count to number");
    } else if (numCount < 1){
      alert("Please enter a positive number");
    } else if (!numCount || !numInput){
      alert("Please enter a number");
    }
    for (var count = numCount; count <= numInput; count += numCount) {
      $("#results").append("<li>" + count + "</li>");
    }
      event.preventDefault();
  });
});
