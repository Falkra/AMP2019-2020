class Point {
  constructor(pos,r,color1,color2){
    this.position = pos;
    this.r = r;
    this.color1 = color1;
    this.color2 = color2

  }


    draw(ctx){
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = this.color1;
      ctx.fillStyle = this.color2;
      ctx.arc(this.position.dx, this.position.dy, this.r, 0, 2*Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
}
