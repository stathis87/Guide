function setup() {
}

function draw() {
}

let map = function (s) {
    let cnv;
    let mapImg;
    let div, divW, divH;
    s.preload = function(){
        mapImg = loadImage("https://stathis87.github.io/Guide/pngs/map.png");
    }
    s.setup = function () {
        updateCanvas();

       
    };

    s.draw = function () {
        s.background(250);
        s.image(mapImg, 0, 0, divW, divH);
    };

    s.windowResized = function () {
        updateCanvas();
    }

    s.mouseClicked = function (fxn) {
        if ((s.mouseX > divW * 0.545) && s.mouseX < (divW * 0.545 + divW * 0.033)
            && (s.mouseY > divH * 0.807) && s.mouseY < (divH * 0.807 + divH * 0.118)) {
            console.log('G02');
        } else if ((s.mouseX > divW * 0.326) && s.mouseX < (divW * 0.326 + divW * 0.088)
            && (s.mouseY > divH * 0.348) && s.mouseY < (divH * 0.348 + divH * 0.045)) {
            console.log('G01');
        } else if ((s.mouseX > divW * 0.026) && s.mouseX < (divW * 0.026 + divW * 0.105)
            && (s.mouseY > divH * 0.717) && s.mouseY < (divH * 0.717 + divH * 0.045)) {
            console.log('G04');
        } else if ((s.mouseX > divW * 0.253) && s.mouseX < (divW * 0.253 + divW * 0.046)
            && (s.mouseY > divH * 0.113) && s.mouseY < (divH * 0.113 + divH * 0.062)) {
            console.log('G01 top');
        } else if ((s.mouseX > divW * 0.869) && s.mouseX < (divW * 0.869 + divW * 0.034)
            && (s.mouseY > divH * 0.198) && s.mouseY < (divH * 0.198 + divH * 0.073)) {
            console.log('G08');
        } else if ((s.mouseX > divW * 0.598) && s.mouseX < (divW * 0.598 + divW * 0.088)
            && (s.mouseY > divH * 0.493) && s.mouseY < (divH * 0.493 + divH * 0.045)) {
            console.log('G05');
        }
    }

    updateCanvas = function () {
        div = document.getElementById("map");
        divW = div.clientWidth;
        divH = divW * 0.75;

        cnv = s.createCanvas(divW, divH);
        cnv.parent("map");
        cnv.position(0, 0);
        const h = divH + "px";
        div.style.height = h;
    }
}
new p5(map);

