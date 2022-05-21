
let carouselArr = [];


class Carousel {
    
  
    constructor(image, title, url) {
            this.image = image;
            this.title = title;
            this.url = url;
            
    }

    static Start(arr, time){
        if(arr) {
            if(arr.length > 0){
                Carousel.firstTime = true;
                Carousel.count = 0;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr); }, time * 1000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(arr) {

        if (this.count >= arr.length) {
            this.count = 0;
        }
        
        let div_selector = document.getElementById("carousel");
        let div_title_selector = document.getElementById("carousel-title");
        let car_image;
        let car_title;
        

        if (this.firstTime === true){
        car_image = document.createElement("img");
        car_image.setAttribute("id", "imgcar");
        car_title = document.createElement("a");
        car_title.setAttribute("id", "titlecar");
        
        } else {
            car_image = document.getElementById("imgcar");
            car_title = document.getElementById("titlecar");
        }
        
        car_title.setAttribute("href", arr[this.count].url);
        car_title.textContent = arr[this.count].title;
        
        car_image.src = "./img/" + arr[this.count].image;
        
        
        div_selector.appendChild(car_image);
        div_title_selector.appendChild(car_title);

       this.count++;


       if (this.firstTime === true) {
           this.firstTime = false;
       }
    } 
};


      

       // INCREMENTAR;