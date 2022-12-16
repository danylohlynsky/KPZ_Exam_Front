import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {RealtorDto} from "../../models/realtor-models/realtor.interface";

@Injectable({
  providedIn: 'root'
})
export class RealtorService implements OnDestroy {

  private backEnd = "https://localhost:7240";

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
  }

  public createRealtor(realtorDto: RealtorDto): Observable<any> {
    return this.http.post<any>(`${this.backEnd}/Realtor/create`, realtorDto);
  }

  public getAllRealtors(): Observable<RealtorDto[]> {
    return this.http.get<RealtorDto[]>(`${this.backEnd}/Realtor`);
  }

  public deleteRealtor(id: number): Observable<any> {
    return this.http.delete(`${this.backEnd}/Realtor/delete/${id}`);

  }

  public getRealtorById(id: number): Observable<RealtorDto> {
    return this.http.get<RealtorDto>(`${this.backEnd}/Realtor/${id}`);
  }

  public editRealtor(realtor: RealtorDto): Observable<any> {
    return this.http.put<any>(`${this.backEnd}/Realtor/update`, realtor);
  }

}
