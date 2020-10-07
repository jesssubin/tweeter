$(document).ready(function () {
  $("textarea").val(""); 
});

$(document).on("input", "textarea", function () {
  let currentCount = $(this).val().length; 
  let counter = $(this).siblings(".tweet-footer").children(".counter");
  $(counter).html(140 - currentCount); 
  if (currentCount > 140) {
    counter.css("color", "red"); 
  } else {
    counter.css("color", "#545149"); 
  }
})