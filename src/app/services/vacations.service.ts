import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacation } from '../components/Model/VacationModel';

@Injectable({
  providedIn: 'root',
})
export class VacationsService {
  vacations: Vacation[] = [];
  constructor(public http: HttpClient) {}
  public getAllVacations(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(`http://localhost:3001/vacations`);
  }
}
