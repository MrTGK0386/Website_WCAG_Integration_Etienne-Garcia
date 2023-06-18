

const playButtons = document.getElementsByClassName("play-button");
//fonction principale
function init (){
    d3.json('data.json').then((data) => {
        //parcours Json
        for (var i = 0; i < data.length; i++){ // parcours du JSON
            mkCard(data[getRandomInt(data.length)],i) //ajout contenu dans les cartes
            mkCarousel(data[i]);//création des items avec template
            if (i==0){ //ajout de la classe active sur le premier item du carousel
                document.querySelector(".carousel-item").classList.add("active");
            }

        }
    });
    playMusicButton()

}
//fonction d'usage
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//fonction de génération de contenu
function mkCard(data,i){

    //selection du container
    const cardContainer = document.querySelector("#cardContainer");
    //selection des toutes les cartes dans une HTMLcollection
    const cardCollection = cardContainer.querySelectorAll(".col");

    //récupération des node
    const img = cardCollection[i].querySelector(".card-cover");
    const songName = img.querySelector("h3");
    const albumName = cardCollection[i].querySelector(".album-name");
    const time = cardCollection[i].querySelector(".timecode");


    //modification des valeurs
    img.style.backgroundImage = "url("+ data.album.images[0].url +")";
    songName.innerHTML = data.name.substr(0, 22);
    albumName.innerHTML = data.album.name.substr(0, 22);
    time.innerHTML = millisToMinutesAndSeconds(data.duration_ms);

    //ajout du lien pour jouer la piste dans le alt du bouton play
    const button = cardCollection[i].querySelector("img");
    button.alt = data.preview_url;
}
function mkCarousel (data){
    if ("content" in document.createElement("template")){

        //selection du template
        const carouselTemplate = document.querySelector("#carousel-template");
        //selection du conteneur du carousel
        const carouselContainer = document.querySelector("#carouselContainer");

        //clonage du content du template
        const carouselContent = carouselTemplate.content.cloneNode(true);

        //modification des éléments du templates
        const imgElement = carouselContent.querySelector('#bgimgCarousel');
        imgElement.style.backgroundImage = "url("+data.album.images[0].url+")";
        const songName = carouselContent.querySelector("h3");
        const albumName = carouselContent.querySelector(".album-name");
        songName.innerHTML = data.name;
        albumName.innerHTML = data.album.name;

        //ajout des éléments sur la page html
        carouselContainer.appendChild(carouselContent);
    }
}
function playMusicButton(){
    console.log(playButtons);
    for (let i = 0 ; i>=0 ; i++) {
        if (i>15){
            i=0;
        }
        playButtons[i].parentNode.addEventListener("click", function (e) {
            if (e.target.nodeName.toLowerCase() === "img") {
                const preview = new Audio(e.target.alt);
                preview.play();
            }
        }, false);
    }


}


init();