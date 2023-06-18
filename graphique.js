function mkGraph1(data){
    const ctx = document.getElementById('graph1');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        maintainAspectRatio : false,
        options: {
            responsive : true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function mkGraph2 (){
    const ctx = document.getElementById('graph2');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        maintainAspectRatio : false,
        options: {
            responsive : true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
