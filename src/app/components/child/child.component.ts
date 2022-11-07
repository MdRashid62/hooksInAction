import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
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
    console.log('Previous Value - (ng on changes)', newNumberChange.previousValue);
    console.log('Current Value - (ng on changes)', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }
  //ngOnInit lifecycle hook
  ngOnInit(): void {
    console.log('ngOnInit value', this.myNewNumber);
  }

  //ngDoCheck
  ngDoCheck(): void {
    console.log(this.myNumber2)
  }

  //ngAfterContentInit
  ngAfterContentInit () {
    console.log("yayyyyyyyyyyyyyyyyyy");
  }

  //ngAfterContentChecked
  ngAfterContentChecked () {
    console.log("This was executed after ngAfterContentInit");
  }

}
