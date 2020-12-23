import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
    { path: 'movie-list', component: MovieListComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }