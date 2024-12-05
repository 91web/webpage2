// Scroll to the chart section when "Trading" is clicked
document.querySelector(".scroll-to-chart").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const chartSection = document.querySelector("#chart"); // Select the chart section
    chartSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the section
    });
});

// Scroll to the chart section when "Trading" is clicked
document.querySelector(".scroll-to-platform").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const chartSection = document.querySelector(".platform");
    chartSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the section
    });
});



 const menu = document.querySelector('nav ul');
    const menuBtn = document.querySelector('.menu-open');
    const closeBtn = document.querySelector('.menu-close');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.add('open')
          
    })
    closeBtn.addEventListener('click',() =>{
    menu.classList.remove('open')
     })

document.addEventListener("DOMContentLoaded", function () {
    const options = {
        series: [
            {
                data: [
                    { x: new Date("2024-12-01"), y: [110, 115, 108, 112] },
                    { x: new Date("2024-12-02"), y: [112, 118, 111, 116] },
                    { x: new Date("2024-12-03"), y: [116, 120, 114, 119] },
                    { x: new Date("2024-12-04"), y: [119, 125, 117, 123] },
                ],
            },
        ],
        chart: {
            type: "candlestick",
            height: 350,
            background: '#1E1E1E', // Dark background
        },
        title: {
            text: "Trading Candlestick Chart",
            align: "center",
            style: {
                color: '#fff', // White title
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                style: {
                    colors: '#fff', // White labels
                },
            },
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
            labels: {
                style: {
                    colors: '#fff', // White labels
                },
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#4fff50', // Green for upward
                    downward: '#ff0000', // Red for downward
                },
            },
        },
        grid: {
            borderColor: '#444', // Dark grid lines
            strokeDashArray: 4, // Dashed grid lines
        },
        tooltip: {
            theme: "dark", // Tooltip dark theme
        },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});

