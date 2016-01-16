window.setInterval(function(){
  var valueAtAnyTime = "<!DOCTYPE html><html><head><title>Processing.JS inside Webpages: Template</title></head><body><p align=\"center\"> <canvas id=\"mycanvas\"></canvas></p></body> <script src=\"https://cdn.rawgit.com/KhanAcademyAmateurs/Blaze/master/JS/AnExactCopyOfProcessing.js\"></script> <script>var sketchProc=function(processingInstance){with(processingInstance){size(400,400);frameRate(30);background(255);" + editor.getValue() + "}};var canvas=document.getElementById(\"mycanvas\");var processingInstance=new Processing(canvas,sketchProc);</script> </html>"
 $("#tehiframe").attr("srcdoc", valueAtAnyTime);
 }, 50);
