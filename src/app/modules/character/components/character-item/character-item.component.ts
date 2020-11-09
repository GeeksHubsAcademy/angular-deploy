import { Component, EventEmitter, Input, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent implements OnInit, OnChanges,OnDestroy {
  @Input()
  character: Character;
  constructor() { }
  ngOnChanges(): void {
    console.log('onChanges', this.character.name);
  }
  ngOnInit(): void {
    console.log('onInit', this.character.name);
  }
  ngOnDestroy(): void {
    console.log('onDestroy', this.character.name);
  }
}
