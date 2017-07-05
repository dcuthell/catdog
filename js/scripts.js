$(document).ready(function(){
  $("button#cat").click(function(){
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#machine").prepend("<li>Woof!</li>");
  });

  $("button#dog").click(function(){
    $("ul#user").prepend("<li>Woof!</li>");
    $("ul#machine").prepend("<li>Meow!</li>");
  });

  $("button#potato").click(function(){
    $("ul#user").prepend("<li>Potato!</li>");
    $("ul#machine").prepend("<li>Potato!</li>");
  });
});
