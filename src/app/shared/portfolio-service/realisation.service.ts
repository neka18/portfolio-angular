import { Injectable } from '@angular/core';
import{ Realisations } from './realisation.model';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SERVER_LOCATION } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class RealisationService{

  // on se connecte à l'api
  private SERVER_URL = SERVER_LOCATION + 'api.php?resource=realisation';
  
  // tslint:disable-next-line:variable-name
  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient : HttpClient) { }

  findAll(searchParams?: any): Observable<HttpResponse<Realisations[]>> { //recherche les parametres de realisations
    return this.httpClient.get<Realisations[]>(this.SERVER_URL, {params: searchParams, headers: this.httpHeaders, observe: 'response'});
  }

}


// @Injectable({
//   providedIn: 'root'
// })
// export class RealisationService {

//   constructor() { }

//   findAll(): Observable<HttpResponse<Realisations[]>> {
//     const _realisation = [
//       new Realisations(1, 'Health', '../assets/portfolio1.png', '14/01/2021'),
//       new Realisations(2, 'Webdesign', '../assets/portfolio2.png', '17/03/2021'),
//       new Realisations(3, 'exercice Portfolio', '../assets/portfolio3.png', '29/03/2021')
//     ];
//     return of(new HttpResponse({body: _realisation}));
//   }
// }

