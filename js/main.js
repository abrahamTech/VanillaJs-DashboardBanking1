const chart = document.querySelector("#chart").getContext("2d");

//New Chart instance
new Chart(chart, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "BTC",
                data: [29732, 34592, 49631, 59095, 58758, 36184, 32869, 40287, 51932, 47223, 65208],
                borderColor: "red",
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [31500, 41000, 88000, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: "blue",
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})


//Show or Hide Sidebar

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

//With keyframes (Orignial Code)
// menuBtn.addEventListener("click", () => {
//     sidebar.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//     sidebar.style.display = "none";
// })

//With Transitions
menuBtn.addEventListener("click", () => {
    // sidebar.classList.toggle("hidden");
    if (sidebar.style.left === "-100%" || !sidebar.style.left) {
        sidebar.style.left = "0";
    } else {
        //You can also make it close with the same button
        //sidebar.style.left = "-100%";
    }
});

// Add an event to the button inside the menu to close the dropdown
closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-100%"; // Close the menu with the animation
    /*setTimeout(() => {
        sidebar.classList.add("hidden");
    }, 1200); */ // Wait for the animation to finish before hiding the menu
});


//Change Theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
});