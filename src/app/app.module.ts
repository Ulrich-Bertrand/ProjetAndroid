import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyDLrt4Vaesb8NxsmW4DKsSQOzH6TGyN5v0',
  authDomain: 'marketit-555b2.firebaseapp.com',
  databaseURL: 'https://marketit-555b2.firebaseio.com',
  projectId: 'marketit-555b2',
  storageBucket: 'marketit-555b2.appspot.com',
  messagingSenderId: '63890312285',
  appId: '1:63890312285:web:e6cb7dfde3db0b00ad91b4',
  measurementId: 'G-GNH3XLWM60'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
