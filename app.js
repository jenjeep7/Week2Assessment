$(function(){
  var clickCount = 0;
  var deleteB = function() {
    $("#newContainer").append("<button id=\"deleteB\">Delete Container</button>");
  };
  var changeB = function(){
    $("#newContainer").append("<button id=\"changeB\">Change Container</button>");
  };

  var clicks = function() {
    $("#newContainer").append("<p>Number of clicks:" + clickCount + "</p>");
  };


  $("#generate").on("click",function(){
    $("#newContainer").remove();
    $("body").append("<div id=\"newContainer\"></div>");
    // $("#newContainer").css("background-color", "yellow");
    $("body").append(clicks);
    $("body").append(deleteB);
    $("body").append(changeB);
    clickCount ++;

  });

  $("body").on("click", "#deleteB", function(){
    $("#newContainer").remove();
    // console.log("hello");
  });

  $("body").on("click", "#changeB", function(){
    $("#newContainer").toggleClass("red");

  });

});
