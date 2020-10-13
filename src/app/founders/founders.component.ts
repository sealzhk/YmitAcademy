import {Component} from '@angular/core';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html'
})
// tslint:disable-next-line:class-name
export class foundersComponent {
  cards = [{image: '../../assets/images/Leyla.jpeg', name: 'Апышева Лейла'},
    {image: '../../assets/images/Sanzhar.jpeg', name: 'Санжар Елшібеков'}
  ];
}
