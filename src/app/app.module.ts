import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import {MessagePage} from '../pages/message/message'
import {LogPage} from '../pages/log/log'
import {SignInPage} from '../pages/sign-in/sign-in'
import {UsersPage} from '../pages/users/users'
import {TabsPage} from '../pages/tabs/tabs'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessagePage,
    LogPage,
    UsersPage,
    TabsPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogPage,
    MessagePage,
    TabsPage,
    UsersPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
