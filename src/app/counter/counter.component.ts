import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>

    <button (click)="decreaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(+1)">+1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;


  // Metodo para incrementar valor del contador
  increaseBy(value: number): void {
    this.counter += value;
  }

  // Metodo para decrementar valor al contador
  decreaseBy(value: number): void {
    this.counter -= value;
  }

  // Metodo para resetar contador a valor por defecto '10'
  resetCounter(): void {
    this.counter = 10;
  }
}
