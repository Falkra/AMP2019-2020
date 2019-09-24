const cs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;

canvas.width = w;
canvas.height = h;

let points = [];

function animate(){
  ctx.clearRect(0,0,w,h)
  requestAnimationFrame(animate);
  let A = new Point(new Vector2d(getRandom(w), getRandom(h)), getRandom(10), "#" + getRandom(256*256*256).toString(16), "#" + getRandom(256*256*256).toString(16));
  points.push(A);

  for(let i = 0; i<points.length; i++){
    points[i].r += .5;
    points[i].draw(ctx)
    if(points[i].r > 50){
      points.splice(i,1);
    }
  }
}

animate();

function getRandom(max){
  return Math.floor(Math.random()*max);
}
