var lightsaber = function(x, y, rot, height, colour){
    
    if(height > 10){
        stroke((red(colour) + 241) / 2, (green(colour) + 241) / 2, (blue(colour) + 241) / 2, 5);
        for(var i = 0; i < constrain((height - 10)/2, 0, 60); i++){
            var spread = pow(i/8, 3);
            strokeWeight(spread);
            line(x, y, x, y - height);
        }
    }
};
background(0, 0, 0);
var c = color(0, 225, 255);
var h = 0;
draw = function(){
    background(0, 0, 0);
    lightsaber(200, 256, 0, h, c);
    h += (200 - h)/21;
};
