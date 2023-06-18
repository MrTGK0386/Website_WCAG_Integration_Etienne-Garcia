function mkGraph1(donnee) {
    const artistes = [];
    for (let f = 0; f < donnee.length; f++){
        artistes.push(donnee[f].artists[0].name)
    }
    console.log(artistes);

    const doubleDeck = numberOfEveryIndex(artistes);
    const labels = doubleDeck[0];
    const list = doubleDeck [1];


    const ctx = document.getElementById('graph1');
    const data = {
        "labels": labels,
        "datasets": [
            {
                "label": "test",
                "backgroundColor": "#007BFF",
                "fill": true,
                "data": list,
                "borderColor": "#ffffff",
                "borderWidth": "1"
            },
        ]
    };
    const options = {
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}

function mkGraph2 (donnee){

    const ctx = document.getElementById('graph2');
    const data = {
        "labels": ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        "datasets": [
            {
                "label": "test",
                "backgroundColor": "#aaadff",
                "fill": true,
                "data": [12, 19, 3, 5, 2, 3],
                "borderColor": "#ffffff",
                "borderWidth": "1"
            },
        ]
    };
    const options = {
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}

function numberOfEveryIndex(a){
    const label = [];
    const iter = [];
    for (let j = 0; j < a.length; j++){
        if (label.includes(a[j])===true){
            let v = label.indexOf(a[j]);
            iter[v] += 1;

        }
        else
        {
            label.push(a[j]);
            iter.push(1);
        }
    }
    return [label,iter];
}