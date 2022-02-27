var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
        datasets: [{
            label: '# Ganhos em Reais',
            data: [2050, 1800, 3500, 1500, 2355, 1950, 2900],
            backgroundColor: [
                'rgba(85, 85, 85, 0.1)',
               
            ],
            borderColor: [
                'rgba(41, 155, 99)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
            responsive: true
    }
});
