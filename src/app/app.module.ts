import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { PopoverComponent } from './popover/popover.component';
import { AnimeinfoPageModule } from './animeinfo/animeinfo.module';
import { PopoTempComponent } from './popo-temp/popo-temp.component';
import { PopoGeradorComponent } from './popo-gerador/popo-gerador.component';





@NgModule({
  declarations: [AppComponent, PopoverComponent,PopoTempComponent,PopoGeradorComponent],
  entryComponents: [PopoverComponent,PopoTempComponent,PopoGeradorComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AnimeinfoPageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
