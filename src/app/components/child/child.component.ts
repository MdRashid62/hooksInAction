import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private myNumber: any;
  @Input() myNumber2: any;
  constructor() { }

  @Input ()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }
  //ngOnchanges lifecycle hook
  ngOnChanges(changes: SimpleChanges): void {
    const newNumberChange: SimpleChange = changes.myNewNumber;
    debugger;
    console.log('Previous Value - (ng on changes)', newNumberChange.previousValue);
    console.log('Current Value - (ng on changes)', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }
  //ngOnInit lifecycle hook
  ngOnInit(): void {
    console.log('ngOnInit value', this.myNewNumber);
  }

}
