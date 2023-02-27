function setup() {
}

function draw() {
}


let map = function (s) {
    s.setup = function() 
    {
        let div = document.getElementById("map");
        let w = div.clientWidth;
        let h = div.clientHeight;
        
        let cnv = s.createCanvas(w, h);
        cnv.position(0, 0);
        cnv.parent("map");
    };

    s.draw = function()
    {
        s.background(250);
    };

}
new p5(map);

