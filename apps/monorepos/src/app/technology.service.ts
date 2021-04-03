import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  constructor(private httpService: HttpClient) {}

  getTechnologies(): Observable<string[]> {
    return this.httpService.get<string[]>(`${environment.api_base}/api`);
  }
}
