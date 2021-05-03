import { checkForYes } from './utils.js';


// import functions and grab DOM elements
const button = document.getElementById('button');
const resultsDiv = document.getElementById('results');

// initialize state

// set event listeners to update state and DOM

button.addEventListener('click', ()=> {
    alert('Welcome to the Philsophers Stone quiz');
    const wantsQuiz = confirm('Do you want to take the quiz?');
    if (wantsQuiz === false) {
        // the word return STOPS any function.
        return;
    }
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    const answer1 = prompt('Was the Philsophers Stone useful for rejuvenation and for achieving immortality?');
    
    let score = 0;

    if (checkForYes(answer1)) {
        score++;
    }

    const answer2 = prompt('Can the holder of the stone turn wood into gold?');

    if (!checkForYes(answer2)) {
        score++;
    }

    const answer3 = prompt('Can the stone transmute common crystals into precious stones and diamond?');
    
    if (checkForYes(answer3)) {
        score++;
    }

    const result = `Congratulations ${firstName} ${lastName}! You got ${score} out of 3!`;

    resultsDiv.textContent = result;

});

