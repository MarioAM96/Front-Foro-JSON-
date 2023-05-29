import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './components/topics/topics.component';
import { InicioComponent } from './components/inicio/inicio.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    InicioComponent
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
