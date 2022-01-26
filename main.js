function preload() {
    
}
function setup() {
    webcam1 = createCanvas(360,300);
    webcam1.position(455,200);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw() {
    image(cam,0,0,360,300);

    circle(0,0,50);
    fill('red');
    stroke('white');
    strokeWeight(2);

    circle(360,0,50);
    fill('red');
    stroke('white');
    strokeWeight(2);

    circle(0,300,50);
    fill('red');
    stroke('white');
    strokeWeight(2);

    circle(360,300,50);
    fill('blue');
    stroke('white');
    strokeWeight(2);

    rect(25,0,315,20);
    fill('red');
    stroke('white');
    strokeWeight(2);
}

function take_snapshot() {
    save("image.png");
}