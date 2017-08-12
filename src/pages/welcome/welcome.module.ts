import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
//import { FraganciasPage } from '../fragancias';

@NgModule({
  declarations: [
    WelcomePage,
  //  FraganciasPage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
