document.addEventListener("DOMContentLoaded", function() {
    const draggableParagraph = document.getElementById("draggable-paragraph");

    let offsetX, offsetY, isDragging = false;

    draggableParagraph.addEventListener("mousedown", function(event) {
        isDragging = true;
        offsetX = event.clientX - draggableParagraph.getBoundingClientRect().left;
        offsetY = event.clientY - draggableParagraph.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            // Update position of the paragraph
            draggableParagraph.style.left = (event.clientX - offsetX) + "px";
            draggableParagraph.style.top = (event.clientY - offsetY) + "px";

            // Change font size based on screen coordinates
            const fontSize = Math.min(event.clientX, event.clientY) / 10; // Adjust this factor for desired scaling
            draggableParagraph.style.fontSize = fontSize + "px";
        }
    });

    document.addEventListener("mouseup", function(event) {
        isDragging = false;
    });
});
