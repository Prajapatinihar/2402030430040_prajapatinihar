const challenges = [
    "Run 5 kilometers.",
    "Do 30 push-ups.",
    "Complete a 20-minute HIIT workout.",
    "Go for a 30-minute walk.",
    "Do 50 sit-ups.",
    "Complete a yoga session for 30 minutes.",
    "Do 20 burpees.",
    "Cycle for 1 hour.",
    "Do a plank for 1 minute.",
    "Take a dance class."
];

document.getElementById('generateChallenge').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challengeOutput = document.getElementById('challengeOutput');
    challengeOutput.textContent = challenges[randomIndex];
});