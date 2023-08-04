$("h1").click(function () {
  $("h1").css("color", "purple");
});

/*
for (let i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purplr";
  });
}
*/
//which is the same as below
$("button").click(function () {
  $("h1").css("color", "purple");
});

//keypress
$("input").keypress(function (event) {
  console.log(event.key);
});
