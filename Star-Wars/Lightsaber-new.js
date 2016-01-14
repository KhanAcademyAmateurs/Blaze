var lightsaber = function(x, y, rot, height, colour, mix){
    var spread;
    stroke((red(colour) + 241 - mix) / 2, (green(colour) + 241 - mix) / 2, (blue(colour) + 241 - mix) / 2, 5);
    for(var i = 0; i < constrain((height - 10)/2, 0, 70); i++){
        spread = pow(i/10, 3);
        strokeWeight(spread);
        line(x, y, x, y - height);
        if(i > 2 && i < 22){
            noStroke();
            fill(79, 79, 79);
            rect(x, y + 19, 9, 42, 5);
            rectMode(CENTER);
            arc(x + 3.5, y + 1, 16, 25, -56, 109);
            stroke((red(colour) + 241 - mix) / 2, (green(colour) + 241 - mix) / 2, (blue(colour) + 241 - mix) / 2, 5);
        }
    }
    
};
background(0, 0, 0);
var c = color(76, 76, 255);
var h = 0;
draw = function(){
    background(0, 0, 0);
    lightsaber(200, 256, 0, h, c, -73);
    h += (200 - h)/21;
};
