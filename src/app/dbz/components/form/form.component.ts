import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from '../../interfaces/character.interface';
import { NgModel } from "@angular/forms";


@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
