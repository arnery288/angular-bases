import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  // Metodo para remover el ultimo heroe de la lista
  public removeLast(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
