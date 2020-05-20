import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router :ActivatedRoute
    ,public productosService:ProductosService ) { }

  ngOnInit(): void {
    this.router.params.subscribe(parametros => {
      this.productosService.getProductoFiltrado(parametros['termino']);
    });
  }

}
