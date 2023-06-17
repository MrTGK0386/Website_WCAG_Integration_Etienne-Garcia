// Mettre en place un écouteur d'évènement qui attend le chargement du site
window.addEventListener('load',()=>{
    // récupération du jeu de données avec d3
    d3.json('data.json').then((data) =>{
        // parcours chaque musique
        for(var i = 0; i < data.lenght; i++){
            // affichage dans la console du nom de l'album et de la musique
            console.log(data[i].album.images[0].url);
            console.log(i);
        }
    });
})