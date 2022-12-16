import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ApartmentDto} from "../../models/apartment-models/apartment.interface";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService implements OnDestroy {

  private backEnd = "https://localhost:7240";

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
  }

  public createApartment(apartmentDto: ApartmentDto): Observable<any> {
    return this.http.post<any>(`${this.backEnd}/Apartment/create`, apartmentDto);
  }

  public getAllApartments(): Observable<ApartmentDto[]> {
    return this.http.get<ApartmentDto[]>(`${this.backEnd}/Apartment`);
  }

  public deleteApartment(id: number): Observable<any> {
    return this.http.delete(`${this.backEnd}/Apartment/delete/${id}`);

  }

  public getApartmentById(id: number): Observable<ApartmentDto> {
    return this.http.get<ApartmentDto>(`${this.backEnd}/Apartment/${id}`);
  }

  public editApartment(apartmentDto: ApartmentDto): Observable<any> {
    return this.http.put<any>(`${this.backEnd}/Apartment/update`, apartmentDto);
  }
}
