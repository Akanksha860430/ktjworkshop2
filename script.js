//default grid3
let cells = document.querySelectorAll(".cell3");
const grid3win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let turnX = true;
let currentPlayer;
let count = 0;

let scoreX = localStorage.getItem('scoreX') ? parseInt(localStorage.getItem('scoreX')) : 0;
let scoreO = localStorage.getItem('scoreO') ? parseInt(localStorage.getItem('scoreO')) : 0;
document.getElementById('p1').innerHTML = `X scored ${scoreX}`;
document.getElementById('p2').innerHTML = `O scored ${scoreO}`;

let resetscore = document.getElementsByClassName('score');
resetscore[0].addEventListener('click', resetscorefun);
function resetscorefun() {
    scoreX = 0;
    scoreO = 0;
    localStorage.setItem('scoreX', scoreX);
    localStorage.setItem('scoreO', scoreO);
    document.getElementById('p1').innerHTML = `X scored ${scoreX}`;
    document.getElementById('p2').innerHTML = `O scored ${scoreO}`;
    document.getElementById('p1').style.backgroundColor = 'white';
    document.getElementById('p2').style.backgroundColor = 'white';
}

solobtn3 = document.getElementsByClassName('solo');
solobtn3[0].addEventListener('click', solomodeOn)
function solomodeOn() {
    document.getElementById('solo').style.backgroundColor = 'green'
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (turnX && count !== 9) {
                cell.innerText = "X";
                turnX = false;
                currentPlayer = "O"
                cell.classList.add('disabled');
                count++;
            };

            while (!turnX && count !== 9) {

                let cellfilling = Math.floor(Math.random() * 9);
                if (currentPlayer === "O" && cells[cellfilling].innerText == "") {
                    cells[cellfilling].innerText = "O";
                    turnX = true;
                    currentPlayer = "X"
                    cells[cellfilling].classList.add('disabled');
                    count++;
                }
            }
            document.getElementById('status').innerHTML = `${currentPlayer}'s Turn`

            let isWinner = checkWinner();

            if (count === 9 && !isWinner) {


                localStorage.setItem('scoreX', scoreX);
                localStorage.setItem('scoreO', scoreO);
                document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                gameDraw();
            }
        })
    })
}

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turnX) {
            cell.innerText = "X";
            turnX = false;
            currentPlayer = "O"
        } else {
            cell.innerText = "O";
            turnX = true;
            currentPlayer = "X"
        }
        cell.classList.add('disabled');
        count++;
        document.getElementById('status').innerHTML = `${currentPlayer}'s Turn`

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {

            scoreX += 50;
            scoreO += 50;
            localStorage.setItem('scoreX', scoreX);
            localStorage.setItem('scoreO', scoreO);
            document.getElementById('p1').innerHTML = `X scored ${scoreX}`
            document.getElementById('p2').innerHTML = `O scored ${scoreO}`

            gameDraw();
        }
    });
});
const gameDraw = () => {
    document.getElementById('status').innerHTML = "Game was a Draw";
    disablecells();
    setTimeout(resetBoard, 5000);
};

const showWinner = (winner) => {
    document.getElementById('status').innerHTML = `"${winner}" has Won`;
    disablecells();
};
const checkWinner = () => {
    for (let pattern of grid3win) {
        let pos1Val = cells[pattern[0]].innerText;
        let pos2Val = cells[pattern[1]].innerText;
        let pos3Val = cells[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                if (pos1Val === "X") { scoreX += 100 }
                else { scoreO += 100 }
                localStorage.setItem('scoreX', scoreX);
                localStorage.setItem('scoreO', scoreO);
                document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                if (scoreX > scoreO) {
                    document.getElementById('p1').style.backgroundColor = 'green'
                    document.getElementById('p2').style.backgroundColor = 'red'
                }
                else if (scoreX === scoreO) {
                    document.getElementById('p1').style.backgroundColor = 'yellow'
                    document.getElementById('p2').style.backgroundColor = 'yellow'
                }
                else {
                    document.getElementById('p1').style.backgroundColor = 'red'
                    document.getElementById('p2').style.backgroundColor = 'green'
                }

                setTimeout(resetBoard, 5000);
                return true;
            }
        }
    }
};


function showboard() {
    document.getElementById('board3').style.display = 'none';
    document.getElementById('board').style.display = 'grid';
    document.getElementById('board2').style.display = 'none';
    resetBoard();
}

const elements = document.getElementsByClassName('reset3');
elements[0].addEventListener('click', showModal);
function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function confirmReset() {
    resetBoard();
    hideModal();
}
const creset3 = document.getElementsByClassName('creset3');
creset3[0].addEventListener('click', confirmReset);
function confirmReset() {
    resetBoard();
    hideModal();
}
const resetBoard = () => {
    turnX = true;
    count = 0;
    enablecells();
    document.getElementById('status').innerHTML = "X's Turn";
};
const disablecells = () => {
    cells.forEach(cell => cell.classList.add('disabled'));
};
const enablecells = () => {
    cells.forEach(cell => {
        cell.classList.remove('disabled');
        cell.innerText = "";
    });
}


//for grid4
function showboard2() {
    document.getElementById('board3').style.display = 'none';
    document.getElementById('board').style.display = 'none';
    document.getElementById('board2').style.display = 'grid';
    resetBoard();
  

    let cells4 = document.querySelectorAll(".cell4");
    const grid4win = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ]
    let turn4X = true;
    let currentPlayer4;
    let count4 = 0;
    solobtn4 = document.getElementsByClassName('solo');
    solobtn4[0].addEventListener('click', solomodeOn4)
    function solomodeOn4() {
        document.getElementById('solo').style.backgroundColor = 'green'
        cells4.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (turn4X && count4 !== 16) {
                    cell.innerText = "X";
                    turn4X = false;
                    currentPlayer4 = "O"
                    cell.classList.add('disabled');
                    count4++;
                };
                while (!turn4X && count4 !== 16) {
                    let cellfilling4 = Math.floor(Math.random() * 16);
                    if (currentPlayer4 === "O" && cells4[cellfilling4].innerText == "") {
                        cells4[cellfilling4].innerText = "O";
                        turn4X = true;
                        currentPlayer4 = "X"
                        cells4[cellfilling4].classList.add('disabled');
                        count4++;}
                    }            
                document.getElementById('status').innerHTML = `${currentPlayer4}'s Turn`
                let isWinner4 = checkWinner4();
                if (count4 === 16 && !isWinner4) {
                    localStorage.setItem('scoreX', scoreX);
                    localStorage.setItem('scoreO', scoreO);
                    document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                    document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                    gameDraw4();
                }
            })
        })
    }
    

    cells4.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (turn4X) {
                cell.innerText = "X";
                turn4X = false;
                currentPlayer4 = "O"
            } else {
                cell.innerText = "O";
                turn4X = true;
                currentPlayer4 = "X"
            }
            cell.classList.add('disabled');
            count4++;
            document.getElementById('status').innerHTML = `${currentPlayer4}'s Turn`

            let isWinner4 = checkWinner4();

            if (count4 === 16 && !isWinner4) {

                scoreX += 100;
                scoreO += 100;
                localStorage.setItem('scoreX', scoreX);
                localStorage.setItem('scoreO', scoreO);
                document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                gameDraw4();
            }
        });
    });
    const gameDraw4 = () => {
        document.getElementById('status').innerHTML = "Game was a Draw";
        disablecells4();
        setTimeout(resetBoard4, 5000);
    };

    const showWinner4 = (winner) => {
        document.getElementById('status').innerHTML = `"${winner}" has Won`;
        disablecells4();
    };
    const checkWinner4 = () => {
        for (let pattern of grid4win) {
            let pos1Val = cells4[pattern[0]].innerText;
            let pos2Val = cells4[pattern[1]].innerText;
            let pos3Val = cells4[pattern[2]].innerText;
            let pos4Val = cells4[pattern[3]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "" && pos4Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val) {
                    showWinner4(pos1Val);
                    if (pos1Val === "X") { scoreX += 200 }
                    else { scoreO += 200 }
                    localStorage.setItem('scoreX', scoreX);
                    localStorage.setItem('scoreO', scoreO);
                    document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                    document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                    if (scoreX > scoreO) {
                        document.getElementById('p1').style.backgroundColor = 'green'
                        document.getElementById('p2').style.backgroundColor = 'red'
                    }
                    else if (scoreX === scoreO) {
                        document.getElementById('p1').style.backgroundColor = 'yellow'
                        document.getElementById('p2').style.backgroundColor = 'yellow'
                    }
                    else {
                        document.getElementById('p1').style.backgroundColor = 'red'
                        document.getElementById('p2').style.backgroundColor = 'green'
                    }
                    setTimeout(resetBoard4, 5000);
                    return true;
                }
            }
        }
    };
    const elements4 = document.getElementsByClassName('reset4');
    elements4[0].addEventListener('click', showModal4);
    function showModal4() {
        document.getElementById('modal').style.display = 'block';
    }

    function hideModal4() {
        document.getElementById('modal').style.display = 'none';
    }
    const creset4 = document.getElementsByClassName('creset4');
    creset4[0].addEventListener('click', confirmReset4);
    function confirmReset4() {
        resetBoard4();
        hideModal4();
    }
    const resetBoard4 = () => {
        turn4X = true;
        count = 0;
        enablecells4();
        document.getElementById('status').innerHTML = "X's Turn";
    };
    const disablecells4 = () => {
        cells4.forEach(cell => cell.classList.add('disabled'));
    };
    const enablecells4 = () => {
        cells4.forEach(cell => {
            cell.classList.remove('disabled');
            cell.innerText = "";
        });
    }
}
//for grid5
function showboard3() {
    document.getElementById('board3').style.display = 'grid';
    document.getElementById('board').style.display = 'none';
    document.getElementById('board2').style.display = 'none';
    resetBoard();

    let cells5 = document.querySelectorAll(".cell5");
    const grid5win = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]
    let turn5X = true;
    let currentPlayer5;
    let count5 = 0;

    solobtn5 = document.getElementsByClassName('solo');
    solobtn5[0].addEventListener('click', solomodeOn5)
    function solomodeOn5() {
        document.getElementById('solo').style.backgroundColor = 'green'
        cells5.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (turn5X && count5 !== 25) {
                    cell.innerText = "X";
                    turn5X = false;
                    currentPlayer5 = "O"
                    cell.classList.add('disabled');
                    count5++;
                };
                while (!turn5X && count5 !== 25) {
                    let cellfilling5 = Math.floor(Math.random() * 25);
                    if (currentPlayer5 === "O" && cells5[cellfilling5].innerText == "") {
                        cells5[cellfilling5].innerText = "O";
                        turn5X = true;
                        currentPlayer5 = "X"
                        cells5[cellfilling5].classList.add('disabled');
                        count5++;}
                    }            
                document.getElementById('status').innerHTML = `${currentPlayer5}'s Turn`
                let isWinner5 = checkWinner5();
                if (count5 === 25 && !isWinner5) {
                    localStorage.setItem('scoreX', scoreX);
                    localStorage.setItem('scoreO', scoreO);
                    document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                    document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                    gameDraw5();
                }
            })
        })
    }

    cells5.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (turn5X) {
                cell.innerText = "X";
                turn5X = false;
                currentPlayer5 = "O"
            } else {
                cell.innerText = "O";
                turn5X = true;
                currentPlayer5 = "X"
            }
            cell.classList.add('disabled');
            count5++;
            document.getElementById('status').innerHTML = `${currentPlayer5}'s Turn`

            let isWinner5 = checkWinner5();

            if (count5 === 25 && !isWinner5) {

                scoreX += 150;
                scoreO += 150;
                localStorage.setItem('scoreX', scoreX);
                localStorage.setItem('scoreO', scoreO);
                document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                gameDraw5();
            }
        });
    });
    const gameDraw5 = () => {
        document.getElementById('status').innerHTML = "Game was a Draw";
        disablecells5();
        setTimeout(resetBoard5, 5000);
    };

    const showWinner5 = (winner) => {
        document.getElementById('status').innerHTML = `"${winner}" has Won`;
        disablecells5();
    };
    const checkWinner5 = () => {
        for (let pattern of grid5win) {
            let pos1Val = cells5[pattern[0]].innerText;
            let pos2Val = cells5[pattern[1]].innerText;
            let pos3Val = cells5[pattern[2]].innerText;
            let pos4Val = cells5[pattern[3]].innerText;
            let pos5Val = cells5[pattern[4]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "" && pos4Val != "" && pos4Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val && pos4Val === pos5Val) {
                    showWinner5(pos1Val);
                    if (pos1Val === "X") { scoreX += 300 }
                    else { scoreO += 300 }
                    localStorage.setItem('scoreX', scoreX);
                    localStorage.setItem('scoreO', scoreO);
                    document.getElementById('p1').innerHTML = `X scored ${scoreX}`
                    document.getElementById('p2').innerHTML = `O scored ${scoreO}`
                    if (scoreX > scoreO) {
                        document.getElementById('p1').style.backgroundColor = 'green'
                        document.getElementById('p2').style.backgroundColor = 'red'
                    }
                    else if (scoreX === scoreO) {
                        document.getElementById('p1').style.backgroundColor = 'yellow'
                        document.getElementById('p2').style.backgroundColor = 'yellow'
                    }
                    else {
                        document.getElementById('p1').style.backgroundColor = 'red'
                        document.getElementById('p2').style.backgroundColor = 'green'
                    }

                    setTimeout(resetBoard5, 5000);
                    return true;
                }
            }
        }
    };
    const elements5 = document.getElementsByClassName('reset5');
    elements5[0].addEventListener('click', showModal5);
    function showModal5() {
        document.getElementById('modal').style.display = 'block';
    }

    function hideModal5() {
        document.getElementById('modal').style.display = 'none';
    }
    const creset5 = document.getElementsByClassName('creset5');
    creset5[0].addEventListener('click', confirmReset5);
    function confirmReset5() {
        resetBoard5();
        hideModal5();
    }
    const resetBoard5 = () => {
        turn5X = true;
        count = 0;
        enablecells5();
        document.getElementById('status').innerHTML = "X's Turn";
    };
    const disablecells5 = () => {
        cells5.forEach(cell => cell.classList.add('disabled'));
    };
    const enablecells5 = () => {
        cells5.forEach(cell => {
            cell.classList.remove('disabled');
            cell.innerText = "";
        });
    }
}

