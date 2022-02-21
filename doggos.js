

//create breeds url
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

//create selector
const select = document.querySelector('.breeds');

//fetch dog breeds
fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })

    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })
 




//change event
select.addEventListener('change', function(event){
    
    //creates url
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
   
    changeDog(url);
    
}) 

const dogImg = document.querySelector(".dog-image");   
 
const spiner = document.querySelector(".spiner");


function changeDog (url) {

spiner.classList.add("show");  
dogImg.classList.remove("show");   

    fetch(url)
        
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data) {
       
        
        dogImg.src = data.message;
        dogImg.alt = "Cute doggo";
       

        
    })


}   
     
dogImg.addEventListener('load', function() {
    spiner.classList.remove("show");
    dogImg.classList.add("show");

})