import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newrev',
  templateUrl: './newRev.component.html'
})
export class NewRevComponent {
  newName: string;
  newRev: string;


  reviewsOnly = ['Спасибо большое вашему центру, отлично объясняют!', 'Давно хотел изучить программирование, спасибо!'];

  @Output() newReview = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  handleButtonClick() {
    this.newReview.emit(this.newRev);
  }
}
