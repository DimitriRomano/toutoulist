import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToutouListComponent } from './toutou-list/toutou-list.component';
import { ToutouTaskComponent } from './toutou-task/toutou-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToutouListComponent,
    ToutouTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
