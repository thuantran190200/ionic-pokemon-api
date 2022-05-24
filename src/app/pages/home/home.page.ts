import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  limit = 20;
  constructor(private apipokemon: ApiPokemonService) {}

  ngOnInit() {
    // this.getAllpokemon();
    this.getpokemon();
    // this.getMethod();
  }
  //lấy api theo method
  getMethod() {
    this.apipokemon
      .getMethod('pokemon', { limit: 20, offset: 20 })
      .subscribe((res: any) => {
        this.pokemons = res.results;
        console.log(res);
      });
  }

  //------------------------------

  getpokemon() {
    this.apipokemon.getpokemon().subscribe((res: any) => {
      this.pokemons = [...this.pokemons, ...res.results];
      console.log(res);
    });
  }
  loadMore() {
    console.log('ok');
    this.getpokemon();
  }
}
