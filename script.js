let boxes = document.querySelectorAll(".cell");
let reset = document.querySelector("#reset");
let winPatters = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let winnerMsg = document.querySelector(".winner-msg");
let newGame = document.querySelector("#new-game");
let result = document.querySelector(".result");

let turn = true;
let gameWin = false;
let state = [false, false, false, false, false, false, false, false, false];
let count = 0;
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (gameWin == false && state[index] == false) {
            if (turn) {
                box.innerText = "X";
                box.style.color = "blue";
                turn = false;
            } else {
                box.innerText = "O";
                box.style.color = "red";
                turn = true;
            }
            count++;
            state[index] = true;
            winner();
        }
    });
});

let showWinner = (winner) => {
    result.classList.remove("hide");
    let Color;
    if (winner == "X") {
        Color = "blue";
    } else {
        Color = "red";
    }
    winnerMsg.innerHTML = `<span style="color: ${Color}; font-weight:600">${winner}</span> won!`;
    gameWin = true;
    boxes.forEach((box) => {
        box.removeEventListener("click");
    })
    

};

let draw = () => {
    result.classList.remove("hide");
    winnerMsg.innerText = "Draw!"
    boxes.forEach((box) => {
      box.removeEventListener("click");
    });
}

const winner = () => {
    
    let flag = false;
    for (let pattern of winPatters) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                flag = true;
                showWinner(box1);
                return;
            }
        } 
    }
    if (count==9) {
      draw();
    }
}

newGame.addEventListener("click", () => {
    location.reload();
    result.classList.add("hide");

})

reset.addEventListener("click", () => {
    location.reload();
});