import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {RouterLink, RouterLinkActive, RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AllRealtorsComponent} from "../realtor-component/all-realtors/all-realtors.component";

import {FormsModule} from "@angular/forms";
import {CreateRealtorComponent} from "../realtor-component/create-realtor/create-realtor.component";
import {DeleteRealtorComponent} from "../realtor-component/delete-realtor/delete-realtor.component";
import {RealtorDetailsComponent} from "../realtor-component/realtor-details/realtor-details.component";
import {UpdateRealtorComponent} from "../realtor-component/update-realtor/update-realtor.component";
import {AllApartmentsComponent} from "../apartment-component/all-apartments/all-apartments.component";
import {CreateApartmentComponent} from "../apartment-component/create-apartment/create-apartment.component";
import {DeleteApartmentComponent} from "../apartment-component/delete-apartment/delete-apartment.component";
import {ApartmentDetailsComponent} from "../apartment-component/apartment-details/apartment-details.component";
import {UpdateApartmentComponent} from "../apartment-component/update-apartment/update-apartment.component";

const routes: Routes = [
  { path: 'realtor-details/:id', component: RealtorDetailsComponent },
  { path: 'realtors', component: AllRealtorsComponent },
  { path: 'create-realtor', component: CreateRealtorComponent },
  { path: 'update-realtor/:id', component: UpdateRealtorComponent },
  { path: 'delete-realtor/:id', component: DeleteRealtorComponent },
  { path: 'apartment-details/:id', component: ApartmentDetailsComponent },
  { path: 'apartments', component: AllApartmentsComponent },
  { path: 'create-apartment', component: CreateApartmentComponent },
  { path: 'update-apartment/:id', component: UpdateApartmentComponent },
  { path: 'delete-apartment/:id', component: DeleteApartmentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllRealtorsComponent,
    CreateRealtorComponent,
    DeleteRealtorComponent,
    RealtorDetailsComponent,
    UpdateRealtorComponent,
    AllApartmentsComponent,
    CreateApartmentComponent,
    DeleteApartmentComponent,
    ApartmentDetailsComponent,
    UpdateApartmentComponent
  ],
  imports: [
    RouterModule.forRoot([...routes]),
    BrowserModule,
    RouterLinkActive,
    RouterLink,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
