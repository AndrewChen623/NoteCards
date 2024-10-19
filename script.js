const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// Variables to keep track of the state
let currentIndex = 0;
let showingTerm = true;

// Function to display the card content
function displayCard() {
    const cardContent = document.getElementById("card-content");
    if (showingTerm) {
        cardContent.textContent = flashcards[currentIndex].term;
    } else {
        cardContent.textContent = flashcards[currentIndex].definition;
    }
}

// Function to go to the next card
function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true; // Always show term when moving to the next card
    displayCard();
}

// Function to go to the previous card
function previousCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true; // Always show term when moving to the previous card
    displayCard();
}

// Toggle between showing term and definition
function flipCard() {
    showingTerm = !showingTerm;
    displayCard();
}

// Function to add a new card
function addCard(term, definition) {
    flashcards.push({ term, definition });
    alert("New flashcard added!");
}

// Event listeners for the card flipping and navigation
document.getElementById("flashcard").addEventListener("click", flipCard);
document.getElementById("next-btn").addEventListener("click", nextCard);
document.getElementById("prev-btn").addEventListener("click", previousCard);
document.getElementById("add-card-btn").addEventListener("click", () => {
    const term = document.getElementById("new-term").value;
    const definition = document.getElementById("new-definition").value;
    if (term && definition) {
        addCard(term, definition);
        // Clear input fields after adding the card
        document.getElementById("new-term").value = "";
        document.getElementById("new-definition").value = "";
    }
});

// Display the first card when the page is loaded
window.onload = displayCard;
