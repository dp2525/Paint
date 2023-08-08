const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;
let brushColor = 'black';
let brushSize = 5;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

document.querySelector('#blue').addEventListener('click', () => {
    brushColor = 'blue';
});

document.querySelector('#black').addEventListener('click', () => {
    brushColor = 'black';
});

document.querySelector('#red').addEventListener('click', () => {
    brushColor = 'red';
});

document.querySelector('#yellow').addEventListener('click', () => {
    brushColor = 'yellow';
});

document.querySelector('#eraser').addEventListener('click', () => {
    brushColor = 'white';
});

document.querySelector('#brushSize').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

document.querySelector('#clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});