import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Product } from '../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price'];
  @ViewChild(MatTable) table: MatTable<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
