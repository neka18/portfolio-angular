import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },

  {
    path:"presentation",
    component: PresentationComponent
  },

  {
    path:"portfolio",
    component: PortfolioComponent
  },

  {
    path:"services",
    component: ServicesComponent
  },

  {
    path:"contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
