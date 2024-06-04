document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    // Function to create a square with a letter inside
    function createSquare(letter) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = letter;
        container.appendChild(square);

        // Make the square draggable
        makeDraggable(square);
    }

    // Function to make an element draggable
    function makeDraggable(element) {
        let offsetX, offsetY, isDragging = false;

        element.addEventListener("mousedown", function(event) {
            isDragging = true;
            offsetX = event.clientX - element.getBoundingClientRect().left;
            offsetY = event.clientY - element.getBoundingClientRect().top;
            element.style.zIndex = "1000"; // Bring the dragged element to the front
        });

        document.addEventListener("mousemove", function(event) {
            if (isDragging) {
                element.style.left = (event.clientX - offsetX) + "px";
                element.style.top = (event.clientY - offsetY) + "px";
            }
        });

        document.addEventListener("mouseup", function(event) {
            if (isDragging) {
                isDragging = false;
                element.style.zIndex = ""; // Reset z-index
            }
        });
    }

    // Create squares for each letter (A-Z)
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        createSquare(letter);
    }
});
