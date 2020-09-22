import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from 'src/app/models/location-response.interface';
import { LocationService } from '../../services/location.service';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations$: Observable<LocationResponse>;
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocations();
  }
}
