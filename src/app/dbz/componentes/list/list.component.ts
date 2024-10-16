import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  /*
    1. Aqui definimos esta lista de caracteres, y se leen en el .html
    2. Pero queremos mandar la lsita que esta en main-page.component.ts a este componente
       y luego llerla en el html

    ** PASOS **
    1. Aqui en el componente "hijo" definimos el decorador @Input, que
       va a permitir recibir un valor del padre, ej: Nuestro "ListComponent" va a poder
       recibir una propiedad "characterList"
    2. Nos vamos al .html del componente padre: "main-page.component.html" y luego
       hacemos: [characterList]="characters" el el selector del
       componente: <dbz-list [characterList]="characters"></dbz-list>, eso dice que
       le vamos a asignar el obj de tipo array que tenemos en el componente padre al
       objeto de tipo arreglo que esta en el componente hijo

    ** NOTA **
    - Basicamente "[characterList]='characters' " dice: " [objetoHijo]='objetoPadre' "
    - Que los valores del padre se vean en el hijo
  */
 @Input()
  public characterList: Character[] = [{
    // Valor por defecto
    name: 'Trunks',
    power: 10,
  }];

  // Crear nuevo emisor de index
  /*
    ** PASOS **
    1. Emitir evento en componente hijo
    2. Escuchar evento en .html del componente padre
    3. Suscribirse al evento en el componente padre
  */

  // onDelete = Index value: number
  // Paso 1 - Emitir evento aquí
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void {
    if (!id) return;

    // TODO: Emitir el id del personaje
    console.log(id);
    this.onDelete.emit(id); // Paso 2 - Emitir el evento

  }
}
