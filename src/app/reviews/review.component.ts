import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
  newName: string;
  newRev: string;


  reviews = [{name: 'Аяулым', rev: 'Спасибо большое вашему центру, отлично объясняют!'},
    {name: 'Батыр', rev: 'Давно хотел изучить программирование, спасибо!'}
  ];

  // tslint:disable-next-line:typedef
  handleButtonClick(newName, newRev) {
    this.reviews.push({name: newName, rev: newRev});
  }
}
