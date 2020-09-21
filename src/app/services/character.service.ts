import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character-response.interface';
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
}
