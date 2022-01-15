let startBtn = document.querySelector('#btn'),
    targetNum,
    userAnswer = 0,
    gameOverIndex = 1;

startBtn.addEventListener('click', function () {
    targetNum = Math.floor(Math.random() * 899) + 100;

    while (userAnswer !== targetNum || gameOverIndex === 10) {



        gameOverIndex++;//десять попыток
    }

});


let num = '222';//Загаданное число
let userNum = '111';//Число пользователя
let gabels = 0;


for (let i = 0; i <= userNum.length - 1; i++) {
    if (userNum[i] === num[i]) {
        gabels--;
        console.log(`Fermi!`);
        console.log(`${userNum[i]} === ${num[i]}`);
    }
    else if (userNum[i] !== num[i]) {
        gabels++;
        for (let j = 0; j <= num.length - 1; j++) {
            if (userNum[i] === num[j]) {
                console.log(`Pico!`);
                console.log(`${userNum[i]} === ${num[j]}`);
            } 
        }
    }
    if (gabels === 3) {
        console.log('Gabels');
        break;
    }
}









//Цикл обрабатывающий информацию
for (let i = 0; i <= userNum.length - 1; i++) {
    if (userNum[i] === num[i]) {
        console.log(`Fermi!`);
        console.log(`${userNum[i]} === ${num[i]}`);
    }
    else if (userNum[i] !== num[i]) {
        for (let j = 0; j <= num.length - 1; j++) {
            if (userNum[i] === num[j]) {
                console.log(`Pico!`);
                console.log(`${userNum[i]} === ${num[j]}`);
            } else if (userNum[i] !== num[j]) {
                gabels = 1;
            }
        }
    }
    if (gabels === 1) {
        console.log('Gabels');
        break;
    }
}




//Мне нужно сделать проверку каждой цифры
//Если значение индекса цифры загаданного числа
//И значение индекса числа польз. не совпадают
//Вывести в консоль Pico
//Столько раз, сколько цифр есть на не правильном месте

//Если ни одна цифра не совпадает - вывести bagels

//Если есть верная цифра и индекс положения в строке совпадает
//вывести fermi