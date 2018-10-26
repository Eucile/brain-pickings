import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DonateComponent } from './donate/donate.component';
import { LogoComponent } from './logo/logo.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LaborsOComponent } from './labors/labors.component';
import { AboutComponent } from './about/about.component';
import { AlsoComponent } from './also/also.component';
import { ArchiveComponent } from './archive/archive.component';
import { FooterComponent } from './footer/footer.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    LogoComponent,
    FavoriteComponent,
    NewsletterComponent,
    LaborsOComponent,
    AboutComponent,
    AlsoComponent,
    ArchiveComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
