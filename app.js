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
            guessNum = prompt(`Раунд #${gameRound}. --${secretNum}`, '');

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













// let targNum = '122';
// let userNum = '2';
// console.log(`Загаданное число: ${targNum}`);
// console.log(`Число пользователя: ${userNum}`);
// console.log(targNum.includes(userNum));

// if (targNum.includes(userNum)) {
//     console.log(true);
// } else {
//     console.log(false);
// }




// let targNum = '122';
// let userNum = '222';
// console.log(`Загаданное число: ${targNum}`);
// console.log(`Число пользователя: ${userNum}`);

// for (let i = 0; i <= userNum.length - 1; i++) {
//     if (userNum[i] === targNum[i]) {
//         console.log(`Fermi!`);
//         console.log(`${userNum[i]} === ${targNum[i]}`);
//         fermi = targNum[i];
//         preCheckFermi = targNum[i];
//     }
//     else if (userNum[i] !== targNum[i]) {
//         for (let preCheck = preCheckFermi; preCheck <= userNum.length - 1; preCheck++) {
//             if (userNum[preCheck] === targNum[preCheck]) {
//                 notPico++;
//             }
//         }

//         for (let j = fermi; j <= targNum.length - 1; j++) {
//             if (userNum[i] === targNum[j]) {
//                 console.log(`Pico!`);
//                 console.log(`${userNum[i]} === ${targNum[j]}`);
//             }
//         }
//         gabels++;
//     }
//     if (gabels === 3) {
//         console.log('Gabels');
//         break;
//     }
// }
//     gameRound = 1,      //Подсчет количества раундов; Макс. знач. = 10
//     gabels = 0,         //Переменная условного оператора.
//     fermi = 0,          //Необходимо для предотвращения повторных подсказок Pico!
//     preCheckFermi = 0,  //
//     notPico = 0,        //
//     userAnswer = 0,     //
//     targetNum;






// //Цикл обрабатывающий информацию
// for (let i = 0; i <= userNum.length - 1; i++) {
//     if (userNum[i] === num[i]) {
//         console.log(`Fermi!`);
//         console.log(`${userNum[i]} === ${num[i]}`);
//     }
//     else if (userNum[i] !== num[i]) {
//         for (let j = 0; j <= num.length - 1; j++) {
//             if (userNum[i] === num[j]) {
//                 console.log(`Pico!`);
//                 console.log(`${userNum[i]} === ${num[j]}`);
//             } else if (userNum[i] !== num[j]) {
//                 gabels = 1;
//             }
//         }
//     }
//     if (gabels === 1) {
//         console.log('Gabels');
//         break;
//     }
// }




