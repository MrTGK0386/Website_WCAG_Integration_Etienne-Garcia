var urlList = [];
function randomSelect(Array){
    let final= Math.floor(Math.random() * Array.length);
    return Array[final];
}

//fonction principale
function init (){

        d3.json('data.json').then((data) => {
            //parcours Json
            console.log(data);
            for (var i = 0; i < data.length; i++){ // parcours du JSON
                mkCard(data[i],i)
                mkCarousel(data[i].album.images[0].url);

            }
        });
}
//fonction d'usage
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

//fonction de génération de contenu
function mkCard(data,i){

    //selection du container
    const cardContainer = document.querySelector("#cardContainer");
    //selection des toutes les cartes dans une HTMLcollection
    const cardCollection = cardContainer.querySelectorAll(".col");

    //récupération des node
    const img = cardCollection[i].querySelector(".card-cover");
    console.log(img);
    const songName = img.querySelector("h3");
    const albumName = cardCollection[i].querySelector(".album-name");
    console.log(albumName);
    const time = cardCollection[i].querySelector(".timecode");


    //modification des valeurs
    img.style.backgroundImage = "url("+ data.album.images[0].url +")";
    songName.innerHTML = data.name;
    albumName.innerHTML = data.album.name;
    time.innerHTML = millisToMinutesAndSeconds(data.duration_ms);
}
function mkCarousel (url){
    if ("content" in document.createElement("template")){

        //selection du template
        const carouselTemplate = document.querySelector("#carousel-template");
        //selection du conteneur du carousel
        const carouselContainer = document.querySelector("#carouselContainer");

        //clonage du content du template
        const carouselContent = carouselTemplate.content.cloneNode(true);

        //modification des éléments du templates
        const imgElement = carouselContent.querySelector('img');
        imgElement.src = url;

        //ajout des éléments sur la page html
        carouselContainer.appendChild(carouselContent);
    }


    // Clone the new row and insert it into the table
    /*const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);*/
}

init();