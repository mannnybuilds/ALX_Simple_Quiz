
// Step 1: Define the function
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Get the selected radio input (if any)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Handle if nothing is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    // Step 5: Get the user's selected value
    const userAnswer = selectedOption.value;

    // Step 6: Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 7: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
