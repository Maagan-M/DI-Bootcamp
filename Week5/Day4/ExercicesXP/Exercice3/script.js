document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const target = document.getElementById("target");

    let offsetX, offsetY, isDragging = false;

    box.addEventListener("mousedown", function(event) {
        isDragging = true;
        offsetX = event.clientX - box.getBoundingClientRect().left;
        offsetY = event.clientY - box.getBoundingClientRect().top;
        box.style.position = "absolute";
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            box.style.left = (event.clientX - offsetX) + "px";
            box.style.top = (event.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", function(event) {
        if (isDragging) {
            isDragging = false;
            const boxRect = box.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();

            if (
                boxRect.left >= targetRect.left &&
                boxRect.top >= targetRect.top &&
                boxRect.right <= targetRect.right &&
                boxRect.bottom <= targetRect.bottom
            ) {
                box.style.left = (targetRect.left - document.body.getBoundingClientRect().left) + "px";
                box.style.top = (targetRect.top - document.body.getBoundingClientRect().top) + "px";
            }
        }
    });
});
