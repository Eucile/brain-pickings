import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DonateComponent } from './donate/donate.component';
import { LogoComponent } from './logo/logo.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LaborsOComponent } from './labors/labors.component';


@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    LogoComponent,
    FavoriteComponent,
    NewsletterComponent,
    LaborsOComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
