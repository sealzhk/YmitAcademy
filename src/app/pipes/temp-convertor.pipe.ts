import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gradeConverter'
})
export class GradeConverterPipe implements PipeTransform {

  // tslint:disable-next-line:typedef
  transform(value: number) {
    if (value && !isNaN(value)) {
      if (value < 25) {
        return 'F';
      } else if (value >= 25 && value < 50) {
        return 'D';
      } else if (value >= 50 && value < 75) {
        return 'C';
      } else if (value >= 75 && value < 90) {
        return 'B';
      } else if (value >= 90 && value <= 100) {
        return 'A';
      }
    }
    return;
  }
}
