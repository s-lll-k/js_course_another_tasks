'use strict';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function game(randomNumber) {
    return function gameInner() {
        let userNum;
        while (!isNumber(userNum)) {
            userNum = prompt('Угадай число от 1 до 100');
            if (userNum === null) {
                return alert('Ну как хочешь! Игра окончена!');
            }
            if (!isNumber(userNum)) {
                alert('Число, мне нужно ЧИСЛО!');
            }
        }
        if (+userNum === randomNumber) {
            return alert('Поздравляю, Вы угадали!!!');
        } else if (+userNum > randomNumber) {
            alert('Загаданное число меньше!');
        } else {
            alert('Загаданное число больше!');
        }
        return gameInner();
    };
}

const startGame = game(Math.floor(Math.random() * 101));
startGame();
console.dir(startGame);