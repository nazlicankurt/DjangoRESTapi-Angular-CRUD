import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";
import {CardStartComponent} from "./card-start/card-start.component";
import {EditCardComponent} from "./edit-card/edit-card.component";
import {EditCardStartComponent} from "./edit-card-start/edit-card-start.component";
import {CanDeactivateGuard} from "./edit-card/canDeactivateGuard.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'cards', component:CardStartComponent, children: [
      {path: ':id', component: CardDetailComponent}
    ]},
  {path: 'edit', component: EditCardStartComponent, children: [
      {path: ':id', component: EditCardComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
