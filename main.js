document.addEventListener("DOMContentLoaded", function () {
    const textMessages = [
        "JavaScript can make web pages dynamic!",
        "JavaScript can change HTML content instantly!",
        "JavaScript can control multimedia elements!",
        "JavaScript powers interactive websites!",
        "JavaScript is fun and powerful!"
    ];
    let messageIndex = 0;

    const demoText = document.getElementById("demo");
    const titleText = document.getElementById("title");
    const textButton = document.getElementById("textButton");
    const colorButton = document.getElementById("colorButton");

    // Function to cycle through text messages with fade effect
    function changeText() {
        demoText.classList.add("fade"); // Add fade-out effect

        setTimeout(() => {
            messageIndex = (messageIndex + 1) % textMessages.length;
            demoText.innerHTML = textMessages[messageIndex];
            titleText.innerHTML = "JavaScript in Action!";
            demoText.classList.remove("fade"); // Fade back in
        }, 500);
    }

    // Function to change text and button colors together
    function changeColor() {
        const colors = ["#ff4d4d", "#1db954", "#ff0077", "#007bff", "#ff9800", "#9c27b0"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        demoText.style.color = randomColor;
        titleText.style.color = randomColor;
        textButton.style.background = randomColor;
        colorButton.style.background = randomColor;
    }

    // Function to display the current date
    function showDate() {
        const today = new Date();
        document.getElementById("dateDisplay").innerHTML = "Today's Date: " + today.toDateString();
    }

    // Event Listeners
    textButton.addEventListener("click", changeText);
    colorButton.addEventListener("click", changeColor);

    // Call function to display the date on page load
    showDate();
});
