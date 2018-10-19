import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material-component'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RSVPComponent } from './rsvp/rsvp.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestsService} from './guests.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RSVPComponent,
    WelcomeComponent,
    SidenavComponent,
  ],
  imports: [
    MatSidenavModule,
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
