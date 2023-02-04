const toggleEl = document.querySelector("#toggle");

toggleEl.addEventListener("click", () => {
    const blanketEl = document.querySelector(".blanket");
    // use return value to decide if what button text should be set
    if (blanketEl.classList.toggle("hidden-text") === true) {
        // 
    }        
});