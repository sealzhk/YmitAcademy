import {
  Component, OnChanges,
  OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-bonus',
  templateUrl: './addBonus.component.html'
})
export class AddBonusComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  addInformation = false;

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
