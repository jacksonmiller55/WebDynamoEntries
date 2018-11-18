import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material-component'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material';
import { RSVPService } from './services/rsvp-service.service';
import { RSVPComponent } from './rsvp/rsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidenavComponent,
    RSVPComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    MaterialComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RSVPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
