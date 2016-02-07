$("check-KA").each(function(){
  $(this)
    .css("background", "#5CB85C")
    .css("color", "white")
    .css("padding", "1em")
    .css("position", "fixed")
    .css("top", "141px")
    .css("right", "-107px")
    .css("width", "107px")
    .css("height", "72px")
    .css("border-top-left-radius", "1em")
    .css("border-bottom-left-radius", "1em");
  $(this).html("<a href='" + $(this).attr("href") + "'>Check me out on KA!</a>");
  $(this).attr("href", "none");
  $(this).animate({
    right: 0
  }, 100);
})
