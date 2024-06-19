document.addEventListener('DOMContentLoaded', function () {
    var descriptions = {
        strings: ["A creator.", "A designer.", "A problem solver."],
        typeSpeed: 60,
        backSpeed: 45,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    }

    var typed = new Typed(".typing-effect", descriptions);
    return typed
})