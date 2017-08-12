import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { PerfilPage } from '../pages/perfil/perfil';
import { WelcomePage } from '../pages/welcome/welcome';
import { ThanksPage } from '../pages/thanks/thanks';
import { ProdutosPage } from '../pages/produtos/produtos';
import { FraganciasPage } from '../pages/fragancias/fragancias';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { MapPage } from '../pages/map/map';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomeClientePage,
    HomePage,
    ListPage,
    CadastroPage,
    LoginPage,
    MapPage,
    PerfilPage,
    ProdutosPage,
    FraganciasPage,
    WelcomePage,
    ThanksPage,
    WelcomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeClientePage,
    HomePage,
    ListPage,
    CadastroPage,
    LoginPage,
    CadastroPage,
    PerfilPage,
    ProdutosPage,
    ThanksPage,
    MapPage,
    WelcomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
