class Carousel {
    constructor(carousel) {
    //references, properties, event handlers
        this.carousel = carousel;

        //grab references to the DOM images, left, & right buttons
        this.leftBtn = this.carousel.querySelector('.left-button')
        this.rightBtn = this.carousel.querySelector('.right-button')
        this.imgList = this.carousel.getElementsByTagName('img')  //returns HTML Collection
        this.index = 0;
        this.imgList[this.index].style.display="block";

        //click handlers
        this.leftBtn.addEventListener('click', () => this.cycleLeft());
        this.rightBtn.addEventListener('click', () => this.cycleRight());
        
    }
    //methods
    //first, reset all or current image to display: none
    //next, loop index either backwards or forwards
    //set image at new index to display:block

    cycleLeft() {
        console.log('left cycle')
        this.imgList[this.index].style.display = 'none';

    }

    cycleRight () {
        console.log('right cycle')
        this.imgList[this.index].style.display = 'none';
    } 
}

class Card {
    constructor(img) {
        this.img = img;
    }
    select() {

    }
}
// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


let carouselList = document.querySelectorAll('.carousel');
//use querySelectorAll so that this component can be *replicated* and if you add future <divs> where class='carousel'
//they will *ALL* get picked up in this list

carouselList.forEach(carousel => new Carousel(carousel));
