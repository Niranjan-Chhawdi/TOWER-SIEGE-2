class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood2.png");
    this.Visiblity = 255;
  }

  display(){

    if(this.body.speed <  3 ){
  
      super.display();
    }
    else{

      World.remove(world,this.body);
  
      push();
      this.Visiblity = this.Visiblity -2;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  
  
  
  
  
  
  
  
  
  
  
  }

}
