import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { FraganciasPage } from '../pages/fragancias/fragancias';
import { ProdutosPage } from '../pages/produtos/produtos';
import { MapPage } from '../pages/map/map';
import { ThanksPage } from '../pages/thanks/thanks';
import { PerfilPage } from '../pages/perfil/perfil';
import { WelcomePage } from '../pages/welcome/welcome';
import { PerguntaPage } from '../pages/pergunta/pergunta';
import { SatisfacaoPage } from '../pages/satisfacao/satisfacao';


PerguntaPage
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    this.pages = [
      { title: 'Home2', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Home', component: HomeClientePage },
      { title: 'Thanks', component: ThanksPage },
      { title: 'Fragancias', component: FraganciasPage },
      { title: 'Produtos', component: ProdutosPage },
      { title: 'Perfil vendedora', component: PerfilPage },
      { title: 'Encontre sua representante', component: MapPage },
      { title: 'Pergunta', component: PerguntaPage },
      { title: 'Satisfacao', component: SatisfacaoPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
