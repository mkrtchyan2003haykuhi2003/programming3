


var m = 20;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var vampireArr = [];
var werewolfArr = [];
var side = 15;

let matrix = [];
let rows = 50;
let columns = 50;



function setup() {
    for (let y = 0; y < rows; y++) {
        matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
        for (let x = 0; x < columns; x++) {
            let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < 20) {
                matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
            }
            if (a >= 20 && a < 40) {
                matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
            }
            else if (a >= 40 && a < 50) {
                matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
            }
            else if (a >= 50 && a < 70) {
                matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
            }
            else if (a >= 70 && a < 90) {
                matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
            }
            else if (a >= 90 && a < 100) {
                matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
            }
        }
    }

    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    {



        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y, 1);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    var et = new GrassEater(x, y, 2);
                    grassEaterArr.push(et);

                }
                else if (matrix[y][x] == 3) {
                    var gish = new Gishatich(x, y, 3);
                    gishatichArr.push(gish);

                }
                else if (matrix[y][x] == 4) {
                    var vam = new Vampire(x, y, 4);
                    vampireArr.push(vam);

                }
                else if (matrix[y][x] == 5) {
                    var wer = new Werewolf(x, y, 5);
                    werewolfArr.push(wer);

                }
            }
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(63, 25, 28);
                rect(x * side, y * side, side, side);
            }
        }
    }


    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();

    }
    for (var i in vampireArr) {
        vampireArr[i].move();
        vampireArr[i].eat();
        vampireArr[i].mul();
        vampireArr[i].die();
    }
    for (var i in werewolfArr) {
        werewolfArr[i].move();
        werewolfArr[i].eat();
        werewolfArr[i].mul();
        werewolfArr[i].die();
    }
}
