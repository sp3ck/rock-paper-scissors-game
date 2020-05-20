let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter==='r') return 'Rock';
    if (letter==='p') return 'Paper';
    return 'Scissors';
}

function win (userChoice,compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(compChoice)} ${smallCompWord}. You won bruski!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose (userChoice,compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(compChoice)} ${smallCompWord} beats ${convertToWord(userChoice)} ${smallUserWord}. You lost brooooo...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw (userChoice,compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} and ${convertToWord(compChoice)} ${smallCompWord}. Twas a bloody draw...!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
     const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }
    //  console.log(userChoice+"\n"+computerChoice);

}

function main() {
    rock_div.addEventListener('click', () =>
        game('r')
        // console.log('Ya clicked on tha rock, man!');
    )
    
    paper_div.addEventListener('click', () =>
        game('p')
        // console.log('Is tha paper, shake ya money maker!');
    )
    
    scissors_div.addEventListener('click', () =>
        game('s')
        // console.log('Ya clicked on tha scissors, dawg!');
    )
}

main();
