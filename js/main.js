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
