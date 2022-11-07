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

  //ngAfterViewInit
  ngAfterViewInit () {
    console.log("This was executed after ngAfterContentChecked");
  }

  //ngAfterViewChecked
  ngAfterViewChecked () {
    console.log("This was executed after ngAfterViewInit");
  }

  // ngOnDestroy
  // this lifecycle hook is used when our component is going to get destroyed
  // we can use this particular lifecycle hook when we need to unsubscribe OR when we need to destroy all the content from the page of that particular component
  ngOnDestroy () {
    console.log("component has been destroyed");
  }
}
//test
