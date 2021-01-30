var Cat,Mouse;

function preload() {
    var catImg1 = loadImage(cat1.png);
    var catImg2 = loadImage(cat2.png);
    var catImg3 = loadImage(cat3.png);
    var catImg4 = loadImage(cat4.png);

    var mouseimg1 = loadImage(mouse1.png);
    var mouseimg2 = loadImage(mouse2.png);
    var mouseimg3 = loadImage(mouse3.png);
    var mouseimg4 = loadImage(mouse4.png);
}

function setup(){
    createCanvas(1000,800);
    var Cat = createSprite(334,300,50,50);
    Cat.addImage(catimg1);

    var Mouse = createSprite(88,300,50,50);
    Mouse.addImage(mouseimg1);

}

function draw() {

    background(255);
     if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2)
     {
     Cat.velocityX = 0;
     Cat.addAnimation("catLastImage", catImg3);
     Cat.changeAnimation("catLastimage");
     }

    drawSprites();
}


function keyPressed(){

     if(keyCode === LEFT_ARROW){
     Cat.velocityX = -5;
     Cat.addAnimation("catRunnng", catimg2);
     Cat.changeAnimation("catRunning");
 }


}
