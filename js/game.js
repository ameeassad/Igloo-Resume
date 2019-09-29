function loop(){
  window.game.update();
  requestAnimationFrame(loop);
}

class Game{
  constructor(){
    this.canvasElm = document.createElement("canvas");
    this.canvasElm.width = 800;
    this.canvasElm.height = 600;
    
    this.gl = this.canvasElm.getContext("webgl2");
    
    document.body.appendChild(this.canvasElm);
  
}
  
  update(){
    this.gl.viewport(0,0,this.canvasElm.width, this.canvasElm.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }
}
