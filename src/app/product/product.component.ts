import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.type';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    // styleUrls: ['./product.component.scss']
    standalone: true,
    imports: [CommonModule]
})
export class ProductComponent implements OnInit {

    products: Product[] = [];

    constructor(
        private _productService: ProductService,
        private _orderService: ProductService,
    ) { }

    ngOnInit(): void {
        // Dau tien vao lay danh sach product tu Service
        this.products = this._productService.products;
    }

    deleteProduct(id: string) {
        this._productService.deleteProduct(id);
        // Sau khi xoa update danh sach san pham tu Service
        this.products = this._productService.products;
    }

}
