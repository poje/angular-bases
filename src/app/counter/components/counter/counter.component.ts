import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;


  increaseBy(value: number)
  {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
