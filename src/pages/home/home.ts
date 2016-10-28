import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timeBase: any = null;
  interval: any = null;
  isCounting: boolean = false;

  timeCounter: string;

  hours: string = "00"
  minutes: string = "00";
  seconds:string = "00";
  miniSeconds:string = "000";

  constructor(public navCtrl: NavController) {
    this.updateTimeCounter();
  }

  updateTimeCounter() {
    this.timeCounter = this.hours + ":" + this.minutes + ":" + this.seconds + ":" + this.miniSeconds;
  }

  toggleTimer(){
    let self = this;

    if (!this.isCounting){
      this.isCounting = true;
      this.timeBase = new Date().getTime();
      console.log('timeBase', this.timeBase);

      this.interval = setInterval(function(){

        let currentTime = new Date().getTime();
        let diff = currentTime - self.timeBase;

        self.hours = Math.floor(diff/3600000) + "";
        self.minutes = Math.floor(diff/60000) + "";
        self.seconds = Math.floor(diff/1000) + "";
        self.miniSeconds = diff%1000 + "";

        this.updateTimeCounter();
      }, 100)
    }else{
      clearInterval(this.interval);

      this.isCounting = false;
      this.timeBase = null;

      self.hours = "00"
      self.minutes = "00";
      self.seconds = "00";
      self.miniSeconds = "000";

      this.updateTimeCounter()
    }
  }
}
