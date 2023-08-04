/*
//when button clicked, hide h1 element
$("button").on("click", function () {
  $("h1").hide();
});
*/

/*
//to switch with hide() and show()
$("button").on("click", function () {
  $("h1").toggle();
});
*/

/*
//fade out, and fade in
$("button").on("click", function () {
  $("h1").fadeOut(); //fadeIn
});
*/

/*
$("button").on("click", function () {
  $("h1").fadeToggle();
});
*/

/*
$("button").on("click", function () {
  $("h1").slideToggle();
});
*/

/*
//use our method
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.2 });
});
*/

$("button").on("click", function () {
  $("h1").slideUp().fadeIn().animate({ opacity: 0.2 });
});
