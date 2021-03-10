import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'; 
import { ProductService } from './product.service';

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth = 80;
    imageMargin = 2;
    showImage: boolean = false; 


    _listFilter: string;
    get listFilter(): string{
      return this._listFilter; //pay attention to privacy underscore! otherwise it's going to be an infinite loop
    }

    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [
        
    ]

    constructor(private _productService: ProductService) {
     
    }

    onRatingClicked(message: string): void{
      // this.pageTitle =  `Product List: ${message}`;
      alert(message);
    }

    performFilter(filterBy:string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

    toggleImage(): void {
      this.showImage = !this.showImage;
      
    }

    ngOnInit(): void {
      this.products = this._productService.getProducts();
      this.filteredProducts = this.products;

    }

    
}