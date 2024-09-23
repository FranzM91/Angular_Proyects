import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class BaseService {
    public url = environment.serviceUrl;
    
    constructor( public http: HttpClient){}

    public httpPost(param: any, path: string): Observable<any> {
        let body = JSON.stringify(param);
        return this.http.post(`${this.url}${path}`, body).pipe(
            tap((res) => { 
                return res; 
            }),
            catchError(err => { 
                return `Error code in service: ${err.status}`; 
            })
        );
    }
}