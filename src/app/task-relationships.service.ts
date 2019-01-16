import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TaskRelationshipsService {

  constructor(private http: HttpClient) { }

  getTaskRelationships(): Observable<[]> {
    return this.http.get('http://localhost:3000/api/relationships').pipe(map(this.extractData), catchError(this.handleError));
  }

  extractData(res: Response): any {
    console.log("processing taskRels");
    let body = res;
    return body || { };
    }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
