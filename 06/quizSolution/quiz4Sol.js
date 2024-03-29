const $box = document.getElementById('box');

let offset = {x:0, y:0};
let isDown = false;

$box.addEventListener('mousedown', (event) => {
    isDown = true;
    // console.log($box.offsetLeft);
    // console.log('mousedown');
    offset.x = $box.offsetLeft - event.clientX;
    offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event) => {
    isDown = false;

    // console.log('mouseup');
});

document.addEventListener('mousemove', (event) => {
    // console.log('mousemove');
    // console.log(event.clientX, event.clientY);

    if (!isDown) return;

    $box.style.left = (event.clientX + offset.x) + "px";
    $box.style.top = (event.clientY + offset.y) + "px";

});