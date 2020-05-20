import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPage } from '../Interface/info-page.interface';
import { Equipo } from '../Interface/info-equipo.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;
  equipo:Equipo[]=[];

  constructor(private http: HttpClient) {
    this.cargarEquipo();
    this.cargarinfoPage();
  }

  private cargarinfoPage() {
    this.http
      .get('assets/data/data.pagina.json')
      .subscribe((resp: InfoPage) => {
        this.info = resp;
        this.cargada = true;
      });
  }
  private cargarEquipo() {
   
    this.http
      .get('https://angular-html-329e2.firebaseio.com/equipo.json')
      .subscribe((resp: Equipo[]) => {
        this.equipo = resp;
      });
  }
}
