import {
  Component, OnChanges,
  OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input
} from '@angular/core';

@Component({
  selector: 'app-bonus-child',
  templateUrl: './bonusChild.component.html'
})
// tslint:disable-next-line:class-name
export class bonusChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  ngAfterContentChecked(): void {
    console.log('AppComponent: AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent:AfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent:AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent:AfterViewInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent:DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent:OnChanges');
  }

  ngOnDestroy(): void {
    console.log('AppComponent:OnDestroy');
  }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
  }

}
