import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';
import { IconsMenu } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getIconMenu(): Observable<NbMenuItem[]> {
    return this.http.get<NbMenuItem[]>('/assets/data/activities.json');
  }
}
