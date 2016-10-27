import { Component } from '@angular/core';
import {MomentModule} from 'angular2-moment';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timeBase: any = null;
  timeDiff: any;
  moment: any;
  timeCounter: any;
  isCounting: boolean = false;

  constructor(public navCtrl: NavController, moment: MomentModule) {
    this.timeDiff = new Date();
    this.moment = moment;
  }

  toggleTimer(){
    if (!this.isCounting){
      this.timeBase = this.moment().valueOf();
      this.isCounting = true;

      while(this.isCounting){
        this.timeCounter = this.moment().valueOf() - this.timeBase;
      }
    }else{
      this.isCounting = false;
      this.timeBase = null;
      this.timeCounter = 0;
    }

  }
}
