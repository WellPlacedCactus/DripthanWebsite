
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const flakes = [];

function randint(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }

function loop() {

  flakes.push({
    x: randint(-canvas.width / 4, canvas.width),
    y: -25,
    r: randint(1, 5),
    vx: randint(5, 10) * 0.1 * Math.random(),
    vy: randint(5, 10) * 0.5
  });

  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = 'white';

  for (let i = flakes.length - 1; i >= 0; --i) {
    const f = flakes[i];

    f.x += f.vx;
    f.y += f.vy;

    c.beginPath();
    c.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    c.closePath();
    c.fill();

    if (f.x - f.r > canvas.width || f.y - f.r > canvas.height) {
      flakes.splice(i, 1);
    }
  }

  requestAnimationFrame(loop);
}

addEventListener('load', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  requestAnimationFrame(loop);
});

addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});