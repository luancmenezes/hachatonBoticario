import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< Updated upstream
import { CadastroPage } from '../pages/cadastro/cadastro';
=======
import { LoginPage } from '../pages/login/login';
>>>>>>> Stashed changes

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< Updated upstream
    CadastroPage,
=======
    LoginPage,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< Updated upstream
    CadastroPage,
=======
    LoginPage,

>>>>>>> Stashed changes
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
