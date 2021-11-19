var num = document.getElementById("14");
var numTwoDigit = num.textContent[0] + num.textContent[1];
var number = parseInt(numTwoDigit, 10);

// function colorCurrent() {
//   if (m.get("hour") === number) {
//     $("#14").css("background-color", "green");
//   }
//   else { 
//       colorPast();
     
//   }
// };


function colorPast() {
    if (currentHour === number) {
        console.log("Correct");
  $("#15").css("background-color", "green");
}
else if (currentHour !== number) {
    console.log("Shit")
    $("#14").css("background-color", "red");
};
};


colorPast();
// colorCurrent();
