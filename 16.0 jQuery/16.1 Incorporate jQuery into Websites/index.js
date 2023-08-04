//use jQuery to select "h1" element and change it color property to red
//$("h1").css("color", "red");

//we can also add form other css properties, if we wanna include multiple properties, just seperate them by space
$("h1").addClass("big-title margin-50");
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
console.log($("h1").hasClass("margin-50"));

//change the content
$("h1").text("Bye"); //change original hi content to "Bye"
//$("button").text("dont click me");
//$("button").html("<em><a href='https://www.google.ca'>Google</a></em>"); //通过 .html()的方法可以写入html格式的代码

$("button"); // this is exactly the same as document.querySelectorAll("button")
