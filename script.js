// added function to button click that sets the local storage with that value//

$(document).ready(function() {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".textItem").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });


  // made it so the local storage data is persistent//
$("#hour-8 .textItem").val(localStorage.getItem("hour-8"));
$("#hour-9 .textItem").val(localStorage.getItem("hour-9"));
$("#hour-10 .textItem").val(localStorage.getItem("hour-10"));
$("#hour-11 .textItem").val(localStorage.getItem("hour-11"));
$("#hour-12 .textItem").val(localStorage.getItem("hour-12"));
$("#hour-13 .textItem").val(localStorage.getItem("hour-13"));
$("#hour-14 .textItem").val(localStorage.getItem("hour-14"));
$("#hour-15 .textItem").val(localStorage.getItem("hour-15"));
$("#hour-16 .textItem").val(localStorage.getItem("hour-16"));


// used moment to indicate the current day for the user//
$("#currentDay").text("Today is: " + moment().format("Do MMM YYYY"));
});


// each .hour get textContent , save as hourContent
// if hour content < moment background-color red 

$( ".hour" ).each(function(i) {
var momentNumber  = parseInt(moment().format("HH"));
var hourNumber = parseInt(this.textContent);

if (momentNumber < hourNumber) {
  $(this).css("background-color", "green")
}

else if (momentNumber > hourNumber) {
  $(this).css("background-color", "red")
}

else if (momentNumber === hourNumber) {
  $(this).css("background-color", "yellow")
}

});



















