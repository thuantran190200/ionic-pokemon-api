import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemondetail: any;
  pokemonDetail: any;
  slideOtps = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };
  pokeName: string;
  pokeImg: string;
  pokeType: string;
  pokeAbility: string;
  constructor(
    private apiPokemon: ApiPokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idpoke = this.route.snapshot.paramMap.get('id');
    console.log(idpoke);
    this.getDetail(idpoke);
  }

  getDetail(idpoke) {
    this.apiPokemon.getPokemonDetail(idpoke).subscribe((res) => {
      this.pokemondetail = res;
      console.log(res);
      this.pokeName = this.pokemondetail.name;
      this.pokeImg = this.pokemondetail.sprites.front_default;
      this.pokeType = this.pokemondetail.types[0].type.name;
      this.pokeAbility = this.pokemondetail.abilities[0].ability.name;
    });
  }
}
