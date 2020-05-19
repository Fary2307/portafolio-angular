import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPage } from '../Interface/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  info: InfoPage = {};
  cargada = false;
  constructor(private http: HttpClient) {
    this.http
      .get('assets/data/data.pagina.json')
      .subscribe((resp: InfoPage) => {
        this.info = resp;
        this.cargada = true;
        console.log(resp.email);
      });
  }
}
