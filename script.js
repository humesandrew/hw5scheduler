

const m = moment();
const displayCurrentDate = m.format("[Today is] dddd, MMM, YYYY");


$("#currentDay").text(displayCurrentDate);

// want to grab what they write now for 8am//

// const eight = $('.primary');


//working on current hour color//


const currentTime = $("#12");
const currentHour = m.get("hour");



function setCurrentTime() {
  if (currentTime == currentHour) {
    console.log("great");
    currentTime.css("background-color", "green");
  }
};

function convertID() {
 
  console.log(currentTime);

}



  // if (currentTime) {
  //   currentTime.css("background-color", "green");
  // }
  // else {

  // }
   
   
  // };//

setCurrentTime();
convertID();




m.get("hour");

console.log(m.format("HH"));


















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