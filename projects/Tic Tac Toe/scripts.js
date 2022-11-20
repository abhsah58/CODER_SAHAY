console.log('welcome to tic tac toe Game');
let music = new Audio('music.mp3');
let turn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let t = 'X';
let tcount = 0;
let boxs = Array.from(document.getElementsByClassName('box'));

// turn.play();
// gameover.play();

const resetText = () => {
    boxs.forEach((element, i) => {
        element.getElementsByClassName('boxtext')[0].innerText = "";
    });
}
//Fuction to change the turn
const changeTurn = () => {
    t = (t == 'X') ? ('O') : 'X';
}

function isThreeSame(a, b, c) {
    let a1 = boxs[a].getElementsByClassName('boxtext')[0].innerText;
    let b1 = boxs[b].getElementsByClassName('boxtext')[0].innerText;
    let c1 = boxs[c].getElementsByClassName('boxtext')[0].innerText;

    if (a1 == "")
        return false;

    if (a1 == b1 && a1 == c1 && b1 == c1) {
        document.getElementsByClassName('info')[0].innerText = "winner is   " + a1;
        setTimeout(console.log,5000,'sdfsdfsf');
        return true;
    }

};

function infoText(){
    document.getElementsByClassName('info')[0].innerText = "Turn for X";
}
//Function to check for a win
const checkWin = () => {
    if (tcount < 5) {
        return false;
    }
    if (isThreeSame(0, 1, 2) || isThreeSame(0, 3, 6) || isThreeSame(0, 4, 8) ||
        isThreeSame(1, 4, 7) || isThreeSame(2, 5, 8) || isThreeSame(3, 4, 5) ||
        isThreeSame(6, 7, 8) || isThreeSame(6, 4, 2)) {
        music.currentTime = 0;
        return true;
    }
    return false;
}


// Game Logic
// console.log(boxs[0].innerText);
boxs.forEach((element, i) => {
    console.log("sdfsaf");
    element.addEventListener('click', () => {

        music.play(); 
        if (element.getElementsByClassName('boxtext')[0].innerText == "") {
            element.getElementsByClassName('boxtext')[0].innerText = t;
            turn.play(0.01);
            changeTurn();
            tcount++;
        }

        if (checkWin()) {
            tcount = 0;
            music.pause();
            gameover.play();
            setTimeout(resetText, 2000);
            setTimeout(infoText, 2000);
        }
        if (tcount == 9) {
            console.log(1);
            setTimeout(resetText, 1000);
            console.log(1);
            tcount = 0;

        }
    });
});


document.getElementById('reset').addEventListener('click', () => {
   resetText(); 
   t = 'X';

});