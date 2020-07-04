import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { declarations } from './core';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { ServicesModule } from './modules/services/services.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { TechnologyModule } from './modules/technology/technology.module';
import { ContactModule } from './modules/contact/contact.module';
import { CoolWebsitesModule } from './modules/cool-websites/cool-websites.module';
import { BlogModule } from './modules/blog/blog.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, declarations],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppStoreModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    PricingModule,
    TechnologyModule,
    PortfolioModule,
    BlogModule,
    CoolWebsitesModule,
    ContactModule,
    externalModules,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
