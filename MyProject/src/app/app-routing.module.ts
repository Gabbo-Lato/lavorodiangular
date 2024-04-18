import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TF2Component } from './tf2/tf2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChisonoComponent } from './chisono/chisono.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'chisono', component: ChisonoComponent },
  { path: 'tf2', component: TF2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
