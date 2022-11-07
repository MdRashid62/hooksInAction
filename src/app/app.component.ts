import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number: number = 12345;
  name: string = "Muhammad";

  user = {
    name: "Muhammad"
  }

  updateValue() {
    this.user = {
      name: "Rashid"
    }
  }

  get counter(){
    return this.number;
  }
  set counter(value){
    this.number = value;
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

}
