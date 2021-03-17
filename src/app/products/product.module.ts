import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpaces,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate:[ ProductGuardService ], component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
