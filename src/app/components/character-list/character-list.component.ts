import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from 'src/app/models/character-response.interface';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<CharacterResponse>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }
  setCharacter(character: Character): void {
    console.log(character);
  }
}
