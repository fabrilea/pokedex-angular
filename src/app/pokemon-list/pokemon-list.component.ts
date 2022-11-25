import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.services';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number | undefined;

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void{
      this.getPokemons();
    }


  getPokemons() {
    this.pokedexService.getPokemons(10, this.page)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        
        response.results.forEach((result: any) => {
          this.pokedexService.getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
        });
      });
    }
}
