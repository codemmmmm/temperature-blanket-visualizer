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
    // decide if the day's max or min temp should be used
    const blanket = document.querySelector(".blanket");
    const useMaxTemp = blanket.dataset.use === "max" ? true : false;
    
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        const result = colorMap.find((colorEntry) => {
            const dayTemp = useMaxTemp === true ? day.dataset.max : day.dataset.min;            
            return parseInt(dayTemp, 10) >= colorEntry.range.low && parseInt(dayTemp, 10) <= colorEntry.range.high;
        })

        if (result !== undefined) {
            day.style.backgroundColor = result.color;
        } else {
            console.log(day.textContent + ":   undefined");
        }        
    })
}

const toggleDatesEl = document.querySelector("#toggle-dates");

toggleDatesEl.addEventListener("click", (e) => {
    const blanketEl = document.querySelector(".blanket");
    // also use return value to decide what the button text should be set to
    if (blanketEl.classList.toggle("hidden-text") === true) {
        e.target.textContent = "Show dates";
    } else {
        e.target.textContent = "Hide dates";
    } 
});

const toggleTempsEl = document.querySelector("#toggle-minmax");
toggleTempsEl.addEventListener("click", (e) => {
    const blanketEl = document.querySelector(".blanket");
    if (blanketEl.dataset.use === "max") {
        blanketEl.dataset.use = "min";
        e.target.textContent = "Use maximum temperatures";
    } else {
        blanketEl.dataset.use = "max";
        e.target.textContent = "Use minimum temperatures";
    }
    colorDays();
})

colorDays();