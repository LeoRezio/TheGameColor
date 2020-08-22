var numSquares = 9;
var colors = genarateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var scoreDisplay = document.querySelector("#score");
var score = 0;
for (i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        //this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
        // A linha de comando de cima faz exatamente a mesma coisa que o If abaixo.
         if (this.textContent == "Easy") {
             numSquares = 3;
         } else if(this.textContent == "Hard") {
             numSquares = 6;
         } else {
             numSquares = 9;
         }
        reset();
    });
}
resetButton.addEventListener("click", function () {
    reset();
})

colorDisplay.textContent = pickedColor;
scoreDisplay.textContent = score;
for (i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            score++;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            score = 0;
        }
        scoreDisplay.textContent = score;
    })
}
function changeColors(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function genarateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function reset() {
    colors = genarateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}