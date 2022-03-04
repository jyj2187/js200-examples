function drawChart(width = 200, height = 400) {
    console.log(`Draw a chart ${width} X ${height}.`);
}
drawChart(100);
drawChart(100, 200);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`Draw a chart ${width} X ${height}.`);
}
drawChart2(300);
drawChart2(100, 200);
drawChart2();