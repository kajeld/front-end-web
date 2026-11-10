
// Get the different screens
const homeScreen = document.getElementById("home-screen");
const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const resultsScreen = document.getElementById("results-screen");

// Get the buttons
const startButton = document.getElementById("start-button");
const nextButtons = document.querySelectorAll(".next-button");
const resultButton = document.getElementById("result-button");
const resetButton = document.getElementById("reset-button");

// Store the visitor's answers
let scores = {
    bodega: 0,
    coffee: 0,
    pigeon: 0,
    headphone: 0,
    sidequest: 0
};


// Character information
const characters = {
    bodega: {
        name: "Bodega Cat",
        emoji: "🐈",
        description: "Has a favorite spot, knows everyone who walks by, and is perfectly happy doing absolutely nothing."
    },

    coffee: {
        name: "Coffee Shop Regular",
        emoji: "☕",
        description: "Has a preferred seat, a usual order, and quietly judges anyone who takes their table."
    },

    pigeon: {
        name: "Busy Pigeon",
        emoji: "🐦",
        description: "Always somewhere to be. No one knows where you're going, including you."
    },

    headphone: {
        name: "Headphone Wanderer",
        emoji: "🎧",
        description: "The world is your music video. You have a soundtrack for every walk, even the walk to get groceries."
    },

    sidequest: {
        name: "Side Quest Enthusiast",
        emoji: "🧭",
        description: "You left the house with one objective and somehow ended up doing six other things."
    }
};


// Show one screen and hide the others
function showScreen(screenToShow) {
    const allScreens = document.querySelectorAll(".screen");

    allScreens.forEach(function(screen) {
        screen.hidden = true;
    });

    screenToShow.hidden = false;
}


// Start the quiz
startButton.addEventListener("click", function() {
    showScreen(question1);
});


// Move to the next question
nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const nextNumber = button.dataset.next;
        const currentQuestion = document.getElementById("question-" + (Number(nextNumber) - 1));

        const selectedAnswer = currentQuestion.querySelector(
            'input[type="radio"]:checked'
        );

        const errorMessage = document.getElementById(
            "error-" + (Number(nextNumber) - 1)
        );

        // Check whether the visitor selected an answer
        if (selectedAnswer === null) {
            errorMessage.textContent = "Choose an answer before moving on!";
            return;
        }

        // Add a point to the selected character
        scores[selectedAnswer.value]++;

        // Clear the error message
        errorMessage.textContent = "";

        // Show the next question
        showScreen(document.getElementById("question-" + nextNumber));
    });
});


// Reveal the final character
resultButton.addEventListener("click", function() {

    const selectedAnswer = question3.querySelector(
        'input[type="radio"]:checked'
    );

    const errorMessage = document.getElementById("error-3");

    // Make sure an answer was selected
    if (selectedAnswer === null) {
        errorMessage.textContent = "Choose an answer before revealing your character!";
        return;
    }

    // Add the final point
    scores[selectedAnswer.value]++;

    // Find the highest score
    const highestScore = Math.max(...Object.values(scores));

    // Find all characters with the highest score
    const winners = Object.keys(scores).filter(function(character) {
        return scores[character] === highestScore;
    });

    // If there is a tie, choose one of the tied characters
    const winningCharacter = winners[
        Math.floor(Math.random() * winners.length)
    ];

    // Get the winning character's information
    const result = characters[winningCharacter];

    // Update the results screen
    document.getElementById("result-emoji").textContent = result.emoji;
    document.getElementById("result-title").textContent = result.name;
    document.getElementById("result-description").textContent = result.description;

    // Display the results
    showScreen(resultsScreen);
});


// Reset the quiz
resetButton.addEventListener("click", function() {

    // Reset all character scores
    scores = {
        bodega: 0,
        coffee: 0,
        pigeon: 0,
        headphone: 0,
        sidequest: 0
    };

    // Clear all selected answers
    document.querySelectorAll('input[type="radio"]').forEach(function(input) {
        input.checked = false;
    });

    // Clear error messages
    document.querySelectorAll(".error-message").forEach(function(message) {
        message.textContent = "";
    });

    // Return to the home screen
    showScreen(homeScreen);
});
