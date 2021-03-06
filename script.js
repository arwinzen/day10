// variable declarations
const progressBar = document.querySelector('#progress-bar');

const container = document.querySelector('#container');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');

// section 1 variables
const layer1 = document.querySelector('#layer1');
const layer2 = document.querySelector('#layer2');
const layer3 = document.querySelector('#layer3');
const layer4 = document.querySelector('#layer4');
const layer5 = document.querySelector('#layer5');
const layer6 = document.querySelector('#layer6');

// section 2 variables
const photoList = document.querySelectorAll('.photo');
const photo1 = document.querySelector('#photo1');
const photo2 = document.querySelector('#photo2');
const photo3 = document.querySelector('#photo3');
const photo4 = document.querySelector('#photo4');
const photo5 = document.querySelector('#photo5');
const photo6 = document.querySelector('#photo6');

// event listener for scroll event
window.addEventListener('scroll', onScroll);

function onScroll(evt){
    let currentWidth = window.scrollY / (container.scrollHeight - window.innerHeight) * 100;
    progressBar.style.width = currentWidth + '%';
};

// section1 positions
const section1Pos = {w:1000, h:400};
layer1Pos = {x:0, y:0, w: 1000, h: 400};
layer2Pos = {x:0, y:0, w: 1000, h: 400};
layer3Pos = {x:0, y:0, w: 1000, h: 400};
layer4Pos = {x:0, y:0, w: 1000, h: 400};
layer5Pos = {x:0, y:0, w: 1000, h: 400};
layer6Pos = {x:0, y:0, w: 1000, h: 400};

// section2 positions
const section2Pos = {w:1000, h:861};
photo1Pos = {x:0, y:0, w: 1200, h: 861};
photo2Pos = {x:0, y:0, w: 1200, h: 861};
photo3Pos = {x:0, y:0, w: 1200, h: 861};
photo4Pos = {x:0, y:0, w: 1200, h: 861};
photo5Pos = {x:0, y:0, w: 1200, h: 861};
photo6Pos = {x:0, y:0, w: 1200, h: 861};

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(evt){
    let mouse = {x: evt.pageX - section1.offsetLeft, y: evt.pageY};
    // console.log(`evt.pageX : ${evt.pageX}, containerOffSet: ${section1.offsetLeft}`, `mouseX: ${mouse.x}`);

    // section 1 layers
    layer1Pos.x = (-mouse.x * 0.08) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer1.style.left = layer1Pos.x + 'px';

    layer2Pos.x = (-mouse.x * 0.05) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer2.style.left = layer2Pos.x + 'px';

    layer3Pos.x = (-mouse.x * 0.03) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer3.style.left = layer3Pos.x + 'px';

    layer4Pos.x = (-mouse.x * 0.01) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer4.style.left = layer4Pos.x + 'px';

    layer5Pos.x = (-mouse.x * 0.008) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer5.style.left = layer5Pos.x + 'px';

    layer6Pos.x = (-mouse.x * 0.005) + (section2Pos.w / 2 - layer1Pos.w / 2);
    layer6.style.left = layer6Pos.x + 'px';

    //section 2 layers
    photo1Pos.x = (-mouse.x * 0.01);
    photo1.style.left = photo1Pos.x + 'px';

    photo2Pos.x = (-mouse.x * 0.008);
    photo2.style.left = photo2Pos.x + 'px';

    photo3Pos.x = (-mouse.x * 0.006);
    photo3.style.left = photo3Pos.x + 'px';

    photo4Pos.x = (-mouse.x * 0.004);
    photo4.style.left = photo4Pos.x + 'px';

    photo5Pos.x = (-mouse.x * 0.002);
    photo5.style.left = photo5Pos.x + 'px';

    photo6Pos.x = (-mouse.x * 0.001);
    photo6.style.left = photo6Pos.x + 'px';
}