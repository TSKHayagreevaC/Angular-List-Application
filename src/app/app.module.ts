import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './compoments/list/list.component';
import { ListItemComponent } from './compoments/list-item/list-item.component';
import { HeaderComponent } from './compoment/layout/header/header.component';
import { AddListComponent } from './compoments/add-list/add-list.component';
import { AboutComponent } from './compoments/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    HeaderComponent,
    AddListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
