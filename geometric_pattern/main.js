var NUM_CIRCLES = 12;   //SETS THE NUMBER OF CIRCLES IN EACH ROW 
var circleDiameter;

function setup() { //SETUP WILL ONLY OPEN ONCE
    createCanvas(480,600); //SPACE TO DRAW
    circleDiameter = width/NUM_CIRCLES; //DEFINING THE VAR USING MATH
}

function draw() { //WILL RUN REPEATEDLY
    ellipse(0,height/2,circleDiameter,circleDiameter); //DRAWING CIRCLES (x-coordinate[of the center of the circle], y-coordinate, x-width, y-width)
    ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(5*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(6*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(7*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(8*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(9*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(10*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(11*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(12*circleDiameter, height/2, circleDiameter, circleDiameter);
    //THERE ARE 12 SINCE WE DEFINED NUM_CIRCLES AS 12
}
//NOW LETS ADD MORE ROWS WITH A WHILE-LOOP
//function draw() {
 //   var x= 0;
  //  while (x <= width) {
  //      
  //  x = x + circleDiameter;
   // }https://workshops.hackclub.com/geometric_pattern/
//}