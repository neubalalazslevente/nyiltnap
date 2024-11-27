
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const hat = document.querySelector('#hat');
    const head = document.querySelector('#head');
    const eye = document.querySelector('#eye');
    const mouth = document.querySelector('#mouth');

    const rndHat = Math.floor(Math.random()*2)+1;
    const rndHead = Math.floor(Math.random()*3)+1;
    const rndEye = Math.floor(Math.random()*2)+1;

    hat.src = `images/hat/hat0${rndHat}.svg`;
    head.src = `images/head/head0${rndHead}.svg`;
    eye.src = `images/eye/eye0${rndEye}.svg`;
    
});