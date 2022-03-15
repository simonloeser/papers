import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPaperComponent } from './components/add-paper/add-paper.component';
import { AddPaperModule } from './components/add-paper/add-paper.module';
import { HomeModule } from './components/home/home.module';
import { ToastModule, ToastService } from 'ng-bootstrap-ext';

@NgModule({
  declarations: [
    AppComponent,
    AddPaperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    ToastModule,
    AddPaperModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
