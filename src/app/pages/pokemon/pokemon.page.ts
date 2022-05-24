import { Component, Input, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  @Input() pokemon!: any;
  pokemonDetail: any;
  constructor(private apiPokemon: ApiPokemonService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiPokemon.getData(this.pokemon.name).subscribe((res) => {
      this.pokemonDetail = res;
      console.log(res);
    });
  }
}
