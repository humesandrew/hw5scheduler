var num = document.getElementById("13");


var numTwoDigit = num.textContent[0] + num.textContent[1];

var number = parseInt(numTwoDigit, 10);


function colorCurrent() {
    if (m.get("hour") === number)
    {
        $("#13").css("background-color", "green");
    }
}

colorCurrent();
