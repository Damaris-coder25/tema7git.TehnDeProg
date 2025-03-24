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

//the orbits
noFill()
stroke("black"); 
ellipse(500, 250, 950, 340)
ellipse(500, 250, 800, 320)
ellipse(500, 250, 650, 300)
ellipse(500, 250, 500, 270)
ellipse(500, 250, 400, 240)

}