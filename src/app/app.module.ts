import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
 import { PostComponent } from './post.component'
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ,HttpModule, JsonpModule],
  declarations: [ AppComponent,PostComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
