let simpleAnswer, mediumAnswer, advancedAnswer;

function generateSimpleProblem() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    simpleAnswer = num1 + num2;
    document.getElementById('simpleProblem').innerText = `${num1} + ${num2} = ?`;
}

function generateMediumProblem() {
    const num1 = Math.floor(Math.random() * 90) + 10; // Two-digit number
    const num2 = Math.floor(Math.random() * 90) + 10; // Two-digit number
    const operation = Math.random() < 0.5 ? ' * ' : ' / ';
    mediumAnswer = operation === ' * ' ? num1 * num2 : num1 / num2;
    document.getElementById('mediumProblem').innerText = `${num1} ${operation} ${num2} = ?`;
}

function generateAdvancedProblem() {
    const xValue = Math.floor(Math.random() * 10) + 1; // x value between 1 and 10
    const operation = Math.random() < 0.5 ? '+' : '-'; // Randomly choose addition or subtraction
    const coeff = Math.floor(Math.random() * 10) + 1; // Coefficient for x
    const constant = Math.floor(Math.random() * 20) + 1; // Constant term

    // Forming an equation: e.g., 3x + 5 = 20
    const equationResult = operation === '+' ? (constant + coeff * xValue) : (constant - coeff * xValue);
    advancedAnswer = xValue; // Store the value of x for checking
    document.getElementById('advancedProblem').innerText = `${coeff}x ${operation} ${constant} = ${equationResult}`;
}

function checkSimple() {
    const userAnswer = parseInt(document.getElementById('simpleAnswer').value);
    const feedback = document.getElementById('simpleFeedback');
    feedback.innerText = userAnswer === simpleAnswer ? "Correct!" : "Try Again!";
    document.getElementById('simpleAnswer').value = ''; // Clear the input
    generateSimpleProblem();
}

function checkMedium() {
    const userAnswer = parseFloat(document.getElementById('mediumAnswer').value);
    const feedback = document.getElementById('mediumFeedback');
    feedback.innerText = userAnswer === mediumAnswer ? "Correct!" : "Try Again!";
    document.getElementById('mediumAnswer').value = ''; // Clear the input
    generateMediumProblem();
}

function checkAdvanced() {
    const userAnswer = parseInt(document.getElementById('advancedAnswer').value);
    const feedback = document.getElementById('advancedFeedback');
    feedback.innerText = userAnswer === advancedAnswer ? "Correct!" : "Try Again!";
    document.getElementById('advancedAnswer').value = ''; // Clear the input
    generateAdvancedProblem();
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => {
        s.style.display = s.id === section ? 'block' : 'none';
    });
    
    if (section === 'simple') {
        generateSimpleProblem();
    } else if (section === 'medium') {
        generateMediumProblem();
    } else if (section === 'advanced') {
        generateAdvancedProblem();
    }
}

// Initialize with Simple tab
showSection('simple');
