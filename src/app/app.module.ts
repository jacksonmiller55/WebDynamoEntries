import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material-component'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestListComponent } from './guest-list/guest-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestsService} from './guests.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GuestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
