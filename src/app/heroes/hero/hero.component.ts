import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spider man';
  public age: number = 28;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Metodo para concatenar el nombre y edad el heroe
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changenHero(): void {
    this.name = 'Iron man';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetForm(): void {
    this.name = 'Spider man';
    this.age = 28;
  }
}
