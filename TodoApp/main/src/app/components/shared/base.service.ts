import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class BaseService {
    private apiUrl = 'http://localhost:5182/api';

    constructor(private http: HttpClient) { }

    BaseService(data: any, url: string): Observable<any> {
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