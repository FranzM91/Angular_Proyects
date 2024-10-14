import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Product } from '../api/product';

@Injectable()
export class ProductService {

    private apiUrl = 'https://stslab.qhanati.com/websda/api';

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    HttpPost(data: any, url: string): Observable<any> {
        let body = JSON.stringify(data);
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json'
            })
        };
        return this.http.post<any>(`${this.apiUrl}${url}`, body, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(() => error.message || 'Server error');
    }
}
