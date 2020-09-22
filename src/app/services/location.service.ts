import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from '../models/location-response.interface';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}
  getLocations(): Observable<LocationResponse> {
    return this.httpClient.get<LocationResponse>(
      'https://rickandmortyapi.com/api/location'
    );
  }
}
