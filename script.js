function setup() {
    createCanvas(1000, 500)
}

function draw() {
    background("#eeeeee")

//the sun
fill("yellow")
circle(500,250,50)
triangle(490, 220, 510, 220, 500, 195)
triangle(490, 280, 510, 280, 500, 305)
triangle(470, 260, 470, 240, 445, 250)
triangle(530, 260, 530, 240, 555, 250)
triangle(515, 220, 528, 235, 540, 210)
triangle(515, 280, 528, 265, 540, 290)
triangle(485, 220, 470, 235, 460, 210)
triangle(485, 280, 470, 265, 460, 290)

//orbits
noFill()
stroke("black"); 
ellipse(500, 250, 950, 360)
ellipse(500, 250, 730, 340)
ellipse(500, 250, 570, 320)
ellipse(500, 250, 420, 290)
ellipse(500, 250, 320, 260)

//planets
fill(148, 191, 152)
circle(900, 340, 90)
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(20); 
  text("P5", 900, 340);
fill(180, 191, 218)
circle(830, 185, 65)
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(15); 
  text("P4", 830, 185);
fill(224, 195, 239)
circle(240, 190, 50)
fill(246, 197, 246)
circle(295, 240, 35)
fill(166, 247, 247)
circle(375, 170, 20)
}