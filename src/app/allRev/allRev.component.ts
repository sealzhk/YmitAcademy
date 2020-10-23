import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allrev',
  templateUrl: './allRev.component.html'
})

export class AllRevComponent {
  @Input() reviewsOnly: string[];
}
