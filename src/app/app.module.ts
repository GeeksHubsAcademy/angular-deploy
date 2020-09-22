import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LocationItemComponent } from './components/location-item/location-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterItemComponent,
    LocationListComponent,
    NavMenuComponent,
    LocationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
