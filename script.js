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


console.log($(".hour").val());






//working on converting each slot to a number to compare to moment//
// $(".textItem").css("background-color", "red");

// function renderColor() {
//   if ( ".hour" == NaN) {
//     $(".textItem").css("background-color", "green")

//   }
//   }



// function updateHour() {
//   var currentHour = moment().hours();
//   $(".blockTime").each(function() {
//   var hourBlock = parseInt($(this).attr("id").split("-")[1]);
// if (hourBlock > moment().hours()) {
// $(".blockTime").css("background-color: red");
// }
//   })
// }

// updateHour();
// var interval = setInterval(updateHour, 15000);













