const $svg = document.querySelector('svg');
const $gooey = document.querySelector('#gooey');
$gooey.addEventListener('change', () => {
    $svg.classList.toggle('gooey');
});

const opts = {
    num: 31,
    radius: 20
};

const init = () => {
    const circles = document.querySelector('.circles');
    const namespace = 'http://www.w3.org/2000/svg';

    for (let i = 0; i < opts.num; i++) {
        const circle = document.createElementNS(namespace, 'circles');
        circle.classList.add('circle');
        circle.setAttribute('r', opts.radius);
        circle.setAttribute('cx', 128);
        circle.setAttribute('cy', 128);
        circles.appendChild(circle);
    }

    let n = 10;
    setInterval(() => {
        n = n -1;
        animate(n);
        if (n === 0) n = 10;
    }, 1200);
};
init();

const animate = n => {
    const paths = document.querySelectorAll('.path');
    const circles = document.querySelectorAll('.circle');
    if (!paths[n]) return;
}