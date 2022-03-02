const $svg = document.querySelector('.svg');
const $gooey = document.querySelector('#gooey');
$gooey.addEventListener('change', () => {
  $svg.classList.toggle('gooey');
});

const opts = {
  num: 31,
  radius: 20 };


const init = () => {
  const circles = document.querySelector('.circles');
  const namespace = 'http://www.w3.org/2000/svg';

  for (let i = 0; i < opts.num; i++) {
    const circle = document.createElementNS(namespace, 'circle');
    circle.classList.add('circle');
    circle.setAttribute('r', opts.radius);
    circle.setAttribute('cx', 128);
    circle.setAttribute('cy', 128);
    circles.appendChild(circle);
  }

  let n = 10;
  setInterval(() => {
    n = n - 1;
    animate(n);
    if (n === 0) n = 10;
  }, 1200);
};
init();

const animate = n => {
  const paths = document.querySelectorAll('.path');
  const circles = document.querySelectorAll('.circle');
  if (!paths[n]) return;
  const length = paths[n].getTotalLength();
  const step = length / opts.num;
  for (let i = 0; i < opts.num; i++) {
    const { x, y } = paths[n].getPointAtLength(i * step);

    gsap.to(circles[i], {
      cx: x,
      cy: y,
      ease: 'power3.out',
      fill: i % 2 === 0 ? 'red' : 'white',
      delay: i * 0.024 });

  }
};
animate();