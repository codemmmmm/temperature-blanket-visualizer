function colorDays() {
    const colorMap = [{
        range: {
            low: -5,
            high: -1
        },
        color: "#968aba"
    }, {
        range: {
            low: 0,
            high: 0
        },
        color: "#dfe0db"
    }, {
        range: {
            low: 1,
            high: 5
        },
        color: "#c2d2eb"
    }, {
        range: {
            low: 6,
            high: 10
        },
        color: "#a4f0fd"
    }, {
        range: {
            low: 11,
            high: 15
        },
        color: "#63c0b6"
    }, {
        range: {
            low: 16,
            high: 20
        },
        color: "#5eb48d"
    }, {
        range: {
            low: 21,
            high: 25
        },
        color: "#e9b234"
    }, {
        range: {
            low: 26,
            high: 30
        },
        color: "#ef9117"
    }, {
        range: {
            low: 31,
            high: 35
        },
        color: "#f36708"
    }, {
        range: {
            low: 36,
            high: 40
        },
        color: "#ec4612"
    }, {
        range: {
            low: 41,
            high: 45
        },
        color: "#ce2714"
    }, {
        range: {
            low: 46,
            high: 100
        },
        color: "#970f13"
    }];
    
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        const result = colorMap.find((colorEntry) => {
            // TODO: decide if max or min is used
            return parseInt(day.dataset.max, 10) >= colorEntry.range.low && parseInt(day.dataset.max, 10) <= colorEntry.range.high;
        })

        if (result !== undefined) {
            day.style.backgroundColor = result.color;
        } else {
            console.log(day.textContent + ":   undefined");
        }        
    })
}

const toggleEl = document.querySelector("#toggle");

toggleEl.addEventListener("click", (e) => {
    const blanketEl = document.querySelector(".blanket");
    // also use return value to decide what the button text should be set to
    if (blanketEl.classList.toggle("hidden-text") === true) {
        e.target.textContent = "Show dates";
    } else {
        e.target.textContent = "Hide dates";
    } 
});

colorDays();


