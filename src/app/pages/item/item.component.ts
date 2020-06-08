import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../Interface/info.productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  detailProduct: Productos;
  productoID: string;

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametos) => {
      this.productoID = parametos['id'];
      this.productosService
        .getProductoByid(this.productoID)
        .subscribe((resp: Productos) => {
          this.detailProduct = resp;
        });
    });
  }
}
