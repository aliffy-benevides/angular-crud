import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productsUrl: string
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productsUrl = this.router.url.match(/([\w\/]+)\/\w+$/)[1]
  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Sucesso")
      this.router.navigate([this.productsUrl])
    })
  }

  cancel(): void {
    this.router.navigate([this.productsUrl])
  }

}
