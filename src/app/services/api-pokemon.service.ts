/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  url = environment.serverurl;
  imgUrl = environment.imageUrl;
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
  getpokemon(limit: number, offset: number) {
    return this.http.get(this.url + `pokemon?limit=${limit}&offset=${offset}`);
  }
  getData(name: string) {
    return this.http.get(this.url + `pokemon/${name}`);
  }
  getPokemonDetail(id: number) {
    return this.http.get(this.url + `pokemon/${id}`);
  }
  getPokemonApi(search: string) {
    return this.http.get(this.url + `pokemon/${search}`);
  }

  getPokeImage(index) {
    return `${this.imgUrl}${index}.png`;
  }
  findPokemon(search) {
    return this.http.get(`${this.url}pokemon/${search}`).pipe(
      map((pokemon) => {
        pokemon['image'] = this.getPokeImage(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['id'];
        return pokemon;
      })
    );
  }
  // getSearchPokemon(search: string) {
  //   return this.http.get(this.url + `pokemon/${search}`).pipe(map(pokemon));
  // }

  // getPokeDetails(index) {
  //   return this.http.get(`${this.url}/pokemon/${index}`).pipe(
  //     map((poke) => {
  //       const sprites = Object.keys(poke['sprites']);
  //       poke['images'] = sprites
  //         .map((spriteKey) => poke['sprites'][spriteKey])
  //         .filter((img) => img);
  //       return poke;
  //     })
  //   );
  // }
}
