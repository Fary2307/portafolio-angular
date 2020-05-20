import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../Interface/info.productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando =  true;
  productos: Productos[] = [];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto() {
    this.http
      .get('https://angular-html-329e2.firebaseio.com/productos.json')
      .subscribe((resp: Productos[]) => {
        this.productos= resp;
        this.cargando = false;
        console.log(this.productos);
      });
  }
}
