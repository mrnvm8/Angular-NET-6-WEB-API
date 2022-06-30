import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LibraryInterfaceComponent } from './library-interface/library-interface.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateformComponent } from './createform/createform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibraryInterfaceComponent,
    CreateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
