var numberOfSquares = 9;

var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message')
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var superHardBtn = document.getElementById('superHardBtn');

easyBtn.addEventListener('click', function () {
    numberOfSquares = 3;
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    superHardBtn.classList.remove('selected')
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    superHardBtn.classList.remove('selected')
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block'
        }
        else {
            squares[i].style.display = 'none';
        }

    }
});
superHardBtn.addEventListener('click', function () {
    superHardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');
    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i];
        // squares[i].style.display = 'block'

        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block'
        }
        else {
            squares[i].style.display = 'none';
        }
    }
});



colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        }
        else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again!'
        }
    });

}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        arr.push(color);
    }
    return arr;
}


resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
})
