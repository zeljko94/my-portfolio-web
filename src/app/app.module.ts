import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MastheadComponent } from './layout/masthead/masthead.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PortfolioModalComponent } from './layout/portfolio-modal/portfolio-modal.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { PortfoliosService } from './services/portfolios.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    PortfolioModalComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PortfoliosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
