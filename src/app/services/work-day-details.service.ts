import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WorkDayDetailsService {
  constructor(private apiService: ApiService) {}

  getWorkDayDetails = (year: string, month: string): Observable<any> => {
    return this.apiService.get(`/work/${year}/${month}`);
  };
}
