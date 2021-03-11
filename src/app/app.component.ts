import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <a class="navbar-brand" href="#">{{ pageTitle }}</a>
      <div class="navbar-nav">
        <a class="nav-item nav-link" [routerLink]="['/welcome']">Home</a>
        <a class="nav-item nav-link" [routerLink]="['/products']">Product List</a>
      </div>
    </nav>
    <div class='container-fluid'>
      <router-outlet></router-outlet>
    </div>
    `,
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'ACME Products';
}