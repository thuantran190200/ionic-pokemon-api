import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiPokemonService } from 'src/app/services/api-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  limit = 10;
  offset = 0;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private apipokemon: ApiPokemonService) {}

  ngOnInit() {
    // this.getAllpokemon();
    this.getpokemon(this.limit, 0);
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

  getpokemon(limit: number, offset: number) {
    this.apipokemon
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
      if (this.pokemons.length === 60) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
