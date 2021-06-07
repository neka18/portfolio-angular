import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RealisationService } from './shared/portfolio-service/realisation.service';
import { ServicesService } from './shared/service-service/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PresentationComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    RealisationService,
    ServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
