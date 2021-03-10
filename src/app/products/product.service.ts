import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

// import 'rxjs/add/operator/do'; //"do" has been replaced with "tap" and you must use "pipe" instead of "chain" for the operators



@Injectable() export class ProductService{

  private _productUrl = './api/products/products.json';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            tap(data => console.log('All: '+ JSON.stringify(data))), 
            catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
      console.error(`OMG! AN ERROR!!! 💣 ${err.message}`); 
      return throwError(new Error(err.message));
    }
}