

const today = moment();
const displayCurrentDate = today.format("[Today is] dddd, MMM, YYYY");

$("#currentDay").text(displayCurrentDate);

// want to grab what they write now for 8am//

const eight = $('.primary');

function colorPast() {
  if (today !== true) {
console.log("hello");
eight.css('background-color', 'red');
  }
  
else if (today) {
  eight.css('background-color', 'green')
}
};

colorPast();

