const cs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;

cs.width = w;
cs.height = h;

let points = [];
let maxPoints = 10;
let counter = 10;

if(counter == 10){
  for(let i=0; i< maxPoints ; i++){
    let point = new Point(new Vector2d(getRandom(w),getRandom(h)),20,"yellow", "yellow");
    points.push(point)
  }
  counter = 0;
}

function animate(){
  	requestAnimationFrame(animate);
    for(let i = 0; i < points.length; i++){
      ctx.fillText(i + 1, points[i].position.dx, points[i].position.dy - 5 - points[i].h);
      points[i].draw(ctx);
    }
}

window.addEventListener('click',(evt)=>{
  let mouseVector = new Vector2d(evt.clientX,evt.clientY);
  for(let i = 0; i < points.length; i++){
    let diff = new Vector2d(0,0);
    diff.differenceVector(mouseVector, points[counter].position);
    if(diff.magnitude < points[i].r){
      points[counter].color1 = "red";
      points[counter].color2 = "red";
      points[counter].draw(ctx);
      counter++
    }
  }
})

animate();

function getRandom(max){
  return Math.floor(Math.random()*max);
}
