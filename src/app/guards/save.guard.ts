import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}

export class SaveGuard implements CanDeactivate<ComponentCanDeactivate>{

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
    console.log('canDeactivate guard works!');
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
