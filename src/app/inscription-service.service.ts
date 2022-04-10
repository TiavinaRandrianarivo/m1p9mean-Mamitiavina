import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable ,throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {

  constructor( private http: HttpClient ) { }

  inscription(r:any){
    return this.http.post(baseUrl+'utilisateurs/inscription',r).pipe(

    );
  }

  /*private handleError(error: HttpErrorResponse ){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:', error.error.message);
    }else{
      console.error('Backend returned code ${ error.status },'+
      'body was:${ error.error }');
    }
    return throwError('Something bad happened: please try again later.');
  }*/

  login(r:any){
    return this.http.post(baseUrl+'utilisateurs/login',r);
  }

  list(role:string){
    return this.http.get(baseUrl+'utilisateurs/list/'+role);
  }

}
