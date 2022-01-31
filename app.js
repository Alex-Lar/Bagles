let startBtn = document.querySelector('#btn'), //Кнопка для начала функции
    gameRound = 1,
    gameOver = true,
    guessNum;

startBtn.addEventListener('click', function () {
    gameOver = true;
    main();
});

function main() {
    let secretNum = getSecretNum();
    alert('Число загадано. У тебя только 10 попыток!');
    while (gameOver) {
        while (guessNum !== secretNum && gameRound <= 10) {
            guessNum = prompt(`Раунд #${gameRound}.`, '');

            let clues = getClues(secretNum, guessNum);


            if(guessNum === secretNum) {
                alert(`Ты угадал число: ${secretNum}. Поздравляю!`);
            } else {
                console.log(`Подсказка для ${gameRound} раунда:`);
                for (let i = 0; i <= clues.length - 1; i++) {
                    console.log(clues[i]);
                }
            }
            gameRound++;
        }
        if (guessNum !== secretNum) {
            alert('Вам не удалось угадать число за десять попыток...', '');
        } 

        gameOver = prompt('Хотите продолжить игру? (да или нет)', '');

        if (gameOver.toLowerCase() === 'нет') {
            gameOver = false;
        } else if (gameOver.toLowerCase() === 'да') {
            gameOver = true;
            main();
        }
    }
}


function getSecretNum() {
    let convertToString = Math.floor(Math.random() * 899) + 100;
    return convertToString.toString();
}

function getClues(secretNum, guess) {
    const clues = [];

    for (let i = 0; i <= guess.length - 1; i++) {
        if (secretNum[i] === guess[i]) {
            clues.push('Fermi');
        } else if (secretNum.includes(guess[i])) {
            clues.push('Pico!');
        }
    }
    if (clues.length === 0) {
        clues.push('Gabels');
    }
    return clues;
}









