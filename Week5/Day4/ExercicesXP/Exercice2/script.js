function myMove() {
    const container = document.getElementById("container");
    const animate = document.getElementById("animate");
    let position = 0;
    const interval = setInterval(function() {
        if (position >= container.clientWidth - animate.clientWidth) {
            clearInterval(interval);
        } else {
            position++;
            animate.style.left = position + "px";
        }
    }, 1);
}
