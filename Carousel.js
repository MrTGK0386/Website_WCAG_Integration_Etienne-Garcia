var urlList = [];
function randomSelect(Array){
    let final= Math.floor(Math.random() * Array.length);
    return Array[final];
}

function init (){

        d3.json('data.json').then((data) => {
            //parcours Json
            console.log(data);
            for (var i = 0; i < data.length; i++){ // parcours du JSON
                //mkCard(data[i])
                mkCarousel(data[i].album.images[0].url);

            }
        });
}
function mkCard(data){

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

        console.log(carouselContent);

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