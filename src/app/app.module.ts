import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import {HomeService} from "./home.service";
import { CardStartComponent } from './card-start/card-start.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditCardComponent } from './edit-card/edit-card.component';
import { EditCardStartComponent } from './edit-card-start/edit-card-start.component';
import {CanDeactivateGuard} from "./edit-card/canDeactivateGuard.service";
import {MatChipsModule} from "@angular/material/chips";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardDetailComponent,
    CardStartComponent,
    EditCardComponent,
    EditCardStartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [HomeService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
