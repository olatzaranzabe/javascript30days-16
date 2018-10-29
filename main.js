'use strict';

const hero = document.querySelector('.hero');

const text = hero.querySelector('h1');
const walk = 100; 
function shadow(e) {
    const { offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    console.log(x, y)

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetRight;
    }

    const xWalk = Math.round(( x / width * walk ) - (walk / 2));
    const yWalk = Math.round(( y / height * walk ) - (walk / 2));

    console.log(xWalk, yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 pink,
    ${xWalk}px ${yWalk * -1}px 0 hotpink
    `;
}

hero.addEventListener('mousemove', shadow);