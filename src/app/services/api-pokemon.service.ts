import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  url = environment.serverurl;
  constructor(private http: HttpClient) {}

  // getMethod(url: string, param: any): Observable<any> {
  //   return this.http.get(this.url, { params: JSON.parse(param) });
  // }
  //get api có thế tái sử dụng nhiều lần
  getMethod(link: string, param?: any): Observable<any> {
    const content = JSON.stringify(param);
    const option: any = {
      body: content,
      observe: 'response',
      responseType: 'blob',
    };
    return this.http.request('get', this.url + link, option);
  }

  // lấy theo từng api
  getpokemon() {
    return this.http.get(this.url + 'pokemon?limit=10');
  }
  getData(name: string) {
    return this.http.get(this.url + `pokemon/${name}`);
  }
}
