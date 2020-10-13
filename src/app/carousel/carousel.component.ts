import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {
  items = [{image: '../../assets/images/car1.png', url: 'https://www.instagram.com/p/CDtJ9hYlXDw/'},
           {image: '../../assets/images/car2.png', url: 'https://www.instagram.com/p/CDtYW8IlobN/'},
           {image: '../../assets/images/car3.png', url: 'https://www.instagram.com/p/CDtei0aFzda/'},
           {image: '../../assets/images/car4.png', url: 'https://www.instagram.com/p/CDt6qSrnIke/'},
           {image: '../../assets/images/car5.png', url: 'https://www.instagram.com/p/CDteSpJlZpN/'}];
}
