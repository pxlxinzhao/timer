import { Component } from '@angular/core';
import {MomentModule} from 'angular2-moment';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timeBase: Date = null;
  timeDiff: any;
  moment: any;

  constructor(public navCtrl: NavController, moment: MomentModule) {
    this.timeDiff = new Date();
    this.moment = moment;
  }

  startTimer(){
    this.timeBase = this.moment();
  }
}
