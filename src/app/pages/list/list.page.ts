import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  pokemons: any[] = [];
  limit = 10;
  offset = 0;
  searchTerm: string;
  pokemonDetail: any;
  constructor(private apiPokemon: ApiPokemonService) {}

  ngOnInit() {
    this.getpokemon(this.limit, 0);
  }
  getpokemon(limit: number, offset: number) {
    this.apiPokemon
      .getpokemon(this.limit, this.offset)
      .subscribe((res: any) => {
        this.pokemons = [...this.pokemons, ...res.results];
        console.log(res);
      });
  }
  loadPokemon(event) {
    setTimeout(() => {
      console.log('Done');
      // if (loadmore) {
      //   this.offset += 10;
      // }
      this.offset += 10;
      this.getpokemon(this.limit, this.offset);
      event.target.complete();
      console.log('1', this.pokemons.length);

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.pokemons.length === 1126) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
