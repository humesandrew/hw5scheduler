

// const m = moment();
// const displayCurrentDate = m.format("[Today is] dddd, MMM, YYYY");


// $("#currentDay").text(displayCurrentDate);

// want to grab what they write now for 8am//

// const eight = $('.primary');


//working on current hour color//


// const currentTime = $("#12");
// const currentHour = m.get("hour");



// function setCurrentTime() {
//   if (currentTime == currentHour) {
//     console.log("great");
//     currentTime.css("background-color", "green");
//   }
// };

// function convertID() {
 
//   console.log(currentTime);





  // if (currentTime) {
  //   currentTime.css("background-color", "green");
  // }
  // else {

  // }
   
   
  // };//

// setCurrentTime();
// convertID();




// m.get("hour");

// console.log(m.format("HH"));




$(document).ready(function() {

  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".textItem").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

function updateHour() {
  var currentHour = moment().hours();
  $(".blockTime").each(function() {
  var hourBlock = parseInt($(this).attr("id").split("-")[1]);
if (hourBlock > moment().hours()) {
$(".blockTime").css("background-color: red");
}
  })
}

updateHour();
var interval = setInterval(updateHour, 15000);

$("#hour-8 .textItem").val(localStorage.getItem("hour-8"));
$("#hour-9 .textItem").val(localStorage.getItem("hour-9"));
$("#hour-10 .textItem").val(localStorage.getItem("hour-10"));


$("#currentDay").text(moment().format("Do MMM YYYY"));

});














// function colorPast() {
// //   if (today) {
// // console.log("hello");//
// // eight.css('background-color', 'red');
// //   }
  



// function colorCurrent() {
//   // today.format("w");//
//   console.log(m);
//   // if (eight < today)
//   // {eight.css('background-color', 'green')};//



// // function colorFuture() {
// //   if (eight) {
// //     console.log("great");
// //   }
// // }//

// // colorPast();//

// colorCurrent();