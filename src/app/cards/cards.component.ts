import {Component} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  cards = [{image: '../../assets/images/productive.png', url: 'https://www.instagram.com/p/CD3I-gunT4w/'},
    {image: '../../assets/images/timeman.jpg', url: 'https://www.instagram.com/p/CERRROZnrqD/'},
    {image: '../../assets/images/competitive.jpg', url: 'https://www.instagram.com/p/CEJ3cgInLEW/'},
    {image: '../../assets/images/social.jpg', url: 'https://www.instagram.com/p/CFKFR4lHtmQ/'}
    ];
}
