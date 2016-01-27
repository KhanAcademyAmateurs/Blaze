//WikiaChatBot.js
var usernameInQuestion = "";
var blacklist = [];
var kicklist = [];
var say = function(tex){
  $("textarea").val(tex);
  $("textarea").text(tex);
  var e = $.Event( "keypress" );
  e.which = 13;
  e.keyCode = 13;
  $("textarea").trigger(e);
}
setInterval(function(){
  var badWords = ["burp", "\x66\x75\x63\x6B", "\x73\x68\x69\x74", "\x64\x61\x6D\x6E", "\x66[aeu]\x6B", "f u", "\x70\x75\x73\x73\x79", "\x64\x69\x63\x6B", "wtf", "golden shower", "porn"];
  for(var it = 0; it < badWords.length; it++){
    $("ul li").each(function(){
      var badWord = new RegExp(badWords[i], "gi");
      if($(this).text().match(badWord)){
        usernameInQuestion = $(this).children(".username").attr("data-user");
        for(var i = 0; i < blacklist.length; i++){
          if(blacklist[i] == usernameInQuestion){
            var e = $.Event( "click" );
            var e0 = $.Event( "click" );
            $("#user-" + usernameInQuestion).trigger(e);
            $(".admin-actions .kick").trigger(e0);
            kicklist.push(usernameInQuestion);
          }else{
            say("Please note that saying bad words is not allowed. Please refrain from saying them. This time you are recieving a warning, next time you will be kicked.");
            blacklist.push(usernameInQuestion);
          }
        }
        $(this).text().replace(badWord, "");
      }
    })
    for(var j in kicklist){
      if($(".inline-alert").last().text() == kicklist[j] + " has joined the chat"){
        say("You might remember that I kicked you for inappropriate language earlier.");
        say("If you continue to say inappropriate things, you will recieve a two-hour ban.");
        say("Note that my feature in this aspect is HEAVILY WIP and may not work perfectly. I leave it up to other chat moderators at this time to ban you if you continue to offend.")
        $(".inline-alert").last().remove();
      }
    }
  }
}, 50)
