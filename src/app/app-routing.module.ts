import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { AboutPokedexComponent } from "./about-pokedex/about-pokedex.component";

const routes: Routes = [
    {path: 'home', component: PokemonListComponent},
    {path: 'about', component: AboutPokedexComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }