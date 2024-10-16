import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

console.log('v4 uuid: ', uuid());


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9001
  }, {
    id: uuid(),

    name: 'Vegeta',
    power: 8000
  },
  {
    id: uuid(),
    name: 'Trunks',
    power: 7000
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character } //Operador spread: dice, toma todos los elementos de character y exparselos en este objeto

    this.characters.push(newCharacter);
  }

  // Paso 3: Suscribirse al evento emitido por el componente hijo
  // onDeleteCharacter(index: number): void {
  //   console.log('Main Page: Evento para eliminar');
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
