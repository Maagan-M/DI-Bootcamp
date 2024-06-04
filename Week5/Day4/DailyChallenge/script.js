document.addEventListener("DOMContentLoaded", function() {
    const letterInput = document.getElementById("letterInput");

    letterInput.addEventListener("input", function() {
        const lettersOnly = /^[a-zA-Z]*$/;
        if (!lettersOnly.test(letterInput.value)) {
            letterInput.value = letterInput.value.replace(/[^a-zA-Z]/g, '');
        }
    });
});
