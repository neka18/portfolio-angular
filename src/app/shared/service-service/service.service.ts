import { Injectable } from '@angular/core';
import { Services } from './service.model';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SERVER_LOCATION } from 'src/global';


@Injectable({
  providedIn: 'root'
})
export class ServicesService{

  // on se connecte à l'api
  private SERVER_URL = SERVER_LOCATION + 'api.php?resource=service';
  
  // tslint:disable-next-line:variable-name
  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient : HttpClient) { }

  findAll(searchParams?: any): Observable<HttpResponse<Services[]>> {
    return this.httpClient.get<Services[]>(this.SERVER_URL, {params: searchParams, headers: this.httpHeaders, observe: 'response'});
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicesService {

//   constructor() { }

//   findAll(): Observable<HttpResponse<Services[]>> {
//     const _Services = [
//       new Services(1, 'HTML', '../assets/html5-1841458_1920.png','C\'est un langage qui permet une structuration grâce à système de balisage lors de la création d\'un site web.'),
//       new Services(2, 'CSS', '../assets/css3-1841590_1920.png', 'Celui-ci permet de mettre entièrement en forme comme on le souhaite chaque balise créée dans le code HTML.'),
//       new Services(3, 'JavaScript', '../assets/javascript-736400_1280.png', 'Quant à JavaScript il permet grâce à ses nombreux framework de créer des applications web complexes comme des animations par exemple.')
//     ];
//     return of(new HttpResponse({body: _Services}));
//   }
// }

