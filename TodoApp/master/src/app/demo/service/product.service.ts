import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Product } from '../api/product';

@Injectable()
export class ProductService {

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

    private httpOptions = {
        headers: new HttpHeaders()
        // .append('Content-Type', 'application/json')
    };
    public httpPost(param: any, url: string): Observable<any> {
        // let body = JSON.stringify(param);
        const body = new HttpParams({ fromObject: param });
        return this.http.post(`${url}`, body, this.httpOptions).pipe(
            // tap(res => { return res; }),
            catchError(err => { return this.internalThrowError(err); })
        );
    }
    private internalThrowError(err) {
        let resultErr = null;
        switch (err.status) {
            case 0:
                resultErr = `Error de conexión. Verifica tu conexión a internet y que el servidor esté disponible.`;
            break;
            case 412:
                resultErr = `Ops error ${err.status}`;
                err.error.forEach(element => {
                resultErr +=` | ${element.msg}`;
                });
            break;
            default:
                resultErr = `Ops error ${err.status} | ${err.error}`;
            break;
        }
        console.error(`REST API ERROR:: ${resultErr}`, err);
        return throwError(() => new Error(resultErr));
    }
}
