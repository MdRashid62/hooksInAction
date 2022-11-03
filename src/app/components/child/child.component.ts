import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private myNumber: any;
  constructor() { }

  @Input ()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

}
