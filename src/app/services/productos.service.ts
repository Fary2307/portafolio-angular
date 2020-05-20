import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productoidx } from '../Interface/productoidx.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando =  true;
  productos: Productoidx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto() {
    this.http
      .get('https://angular-html-329e2.firebaseio.com/productos_idx.json')
      .subscribe((resp: Productoidx[]) => {
        this.productos= resp;
        this.cargando = false;
        console.log(this.productos);
      });
  }
}
