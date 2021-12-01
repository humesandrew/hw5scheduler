


$(".card").each(function(i) {


var eachValue = $(this).addClass("value", i);
  
//   console.log($(".value").text());

  $(".value").css("background-color", "red");

  if (i >= currentHour) {
    $(".value").css("background-color", "green");
    console.log("hello");
  }
    else if (i <= currentHour) {
        $(".value").css("background-color", "red")
       
    }
});
// console.log($(".value"), index + 8);


