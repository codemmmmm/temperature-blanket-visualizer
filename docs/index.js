const toggleEl = document.querySelector("#toggle");

toggleEl.addEventListener("click", (e) => {
    const blanketEl = document.querySelector(".blanket");
    // also use return value to decide what the button text should be set to
    if (blanketEl.classList.toggle("hidden-text") === true) {
        e.target.textContent = "Show dates";
    }
    else {
        e.target.textContent = "Hide dates";
    } 
});