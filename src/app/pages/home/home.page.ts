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
  limit = 9;
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
        this.pokemons = res.results;
        console.log(res);
      });
  }
  // loadMore() {
  //   console.log('ok');
  // }

  loadPokemon(loadMore = true, event?) {
    if (loadMore) {
      this.offset += 20;
    }
    this.apipokemon
      .getpokemon(this.limit, this.offset)
      .subscribe((res: any) => {
        this.pokemons = [...this.pokemons, ...res.results];
        console.log(res);
      });

    setTimeout(() => {
      if (event) {
        event.target.complete();
      }
    }, 50000);
    // eslint-disable-next-line eqeqeq
    if (this.offset == 200) {
      this.infiniteScroll.disabled = true;
    }

    // setTimeout(() => {
    //   console.log('Done');
    //   event.target.complete();
    //   // App logic to determine if all data is loaded
    //   // and disable the infinite scroll
    //   if (data.length === 1000) {
    //     event.target.disabled = true;
    //   }
    // }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
