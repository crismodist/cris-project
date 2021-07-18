class Bottle{

          constructor(w,h){
         this.w = width;
         this.h = height;
         bottle = loadImage("bottle", bottleImg)

          }



display(){

push();
rotate(PI / 2 * rotation);
imageMode(CENTER);
image(this.texture, centerPosX, centerPosY);
pop();

}

}
