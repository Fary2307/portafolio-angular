import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productoidx } from '../Interface/productoidx.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: Productoidx[] = [];
  productoFiltrado: Productoidx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://angular-html-329e2.firebaseio.com/productos_idx.json')
        .subscribe((resp: Productoidx[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProductoByid(id: string) {
    return this.http.get(
      `https://angular-html-329e2.firebaseio.com/productos/${id}.json`
    );
  }

  getProductoFiltrado(termino: string) {
    if (this.productos.length === 0) {
      //cargarProductos
      this.cargarProducto().then(() => {
        this.filtraProducto(termino);
      });
    } else {
      //Aplicar Filtro
      this.filtraProducto(termino);
    }
  }

  filtraProducto(termino: string) {
    this.productoFiltrado = [] ;
    termino = termino.toLowerCase();  
    this.productos.forEach((prod) => {
      const tituloLower = prod.titulo.toLowerCase();
      const categoriaLower = prod.categoria.toLowerCase();
      if (categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
