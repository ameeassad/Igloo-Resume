function loop(){
  window.game.update();
  requestAnimationFrame(loop);
}

class Game{
  constructor(){
    this.canvasElm = document.createElement("canvas");
    this.canvasElm.width = 800;
    this.canvasElm.height = 600;
    
    document.body.appendChild(this.canvasElm);
  
}
  
  update(){
  }
}
