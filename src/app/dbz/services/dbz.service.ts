import { Injectable } from '@angular/core';
import { v4 as uuid, v4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];



  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number) {
  //   console.log(index);
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterByID(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
    console.log(this.characters);

  }

}
