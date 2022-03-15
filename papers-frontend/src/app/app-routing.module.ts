import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaperComponent } from './components/add-paper/add-paper.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:user', component: HomeComponent },
  { path: 'add-paper', component: AddPaperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
