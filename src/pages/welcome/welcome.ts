import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FraganciasPage } from '../fragancias/fragancias';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {
  fraganciasPage = FraganciasPage;
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  constructor(){

  }

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad WelcomePage');
  //}

}
