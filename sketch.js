function preload(){
  capsuleImg = loadImage("Docking-undocking/spacecraft1.png")
  capsuleImgleft = loadImage("Docking-undocking/spacecraft3.png")
  capsuleImgright = loadImage("Docking-undocking/spacecraft4.png")
  capsuleImgup = loadImage("Docking-undocking/spacecraft2.png")
  
  spacestationImg = loadImage("Docking-undocking/iss.png")
  spacebackgroungImg = loadImage("Docking-undocking/spacebg.jpg")

}

function setup() {
  createCanvas(800,800);

  spacestation =createSprite(400, 200, 50, 50);
  spacestation.addImage("station",spacestationImg)
  //spacestation.scale= 0.5;

  capsule = createSprite(400, 600,50, 50)
  capsule.addImage("capsule",capsuleImg)
  capsule.scale = 0.3;
  
  capsule.addImage("right",capsuleImgright)
  capsule.addImage("left",capsuleImgleft)
  capsule.addImage("up",capsuleImgup)

}

function draw() {
  background("black");  
  
  if(keyDown("up")){
    capsule.y= capsule.y -5
    capsule.changeImage("up")
  }
  else if(keyDown("left")){
    capsule.x = capsule.x - 5
    capsule.changeImage("left")
  }
  else if(keyDown("right")){
    capsule.x = capsule.x + 5
    capsule.changeImage("right")
  }
  else {
    capsule.changeImage("capsule")
  }

  if(capsule.y<300 && capsule.x<=335 && capsule.x>=330){
    text("Docking is Successful",400,400)
  }
  spacestation.debug= true
  console.log(capsule.x)
  drawSprites();

  text(mouseX+","+mouseY,200,20)

}