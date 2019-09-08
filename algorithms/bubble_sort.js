let values = [];
let i = 0;
let j = 0;
let w = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(15);
}

function draw() {
    background(51);
    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                swap(values, j, j + 1);
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++;


    for (let i = 0; i < values.length; i++) {
        stroke(0);
        fill(255);
        rect(i * w, height - values[i], w, values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}