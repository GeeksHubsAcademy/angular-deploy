import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from 'src/app/models/character-response.interface';
import { Character } from 'src/app/models/character.model';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>(
      'https://rickandmortyapi.com/api/character'
    );
  }
  getCharacterById(id: string): Observable<Character> {
    return this.httpClient.get<Character>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
