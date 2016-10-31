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

  timeCounter: string = "00:00:00:000";

  hours: string = "00"
  minutes: string = "00";
  seconds:string = "00";
  miniSeconds:string = "000";

  constructor(public navCtrl: NavController) {
  }

  toggleTimer(){
    let self = this;

    if (!self.isCounting){
      self.isCounting = true;
      self.timeBase = new Date().getTime();

      this.interval = setInterval(function(){

        let currentTime = new Date().getTime();
        let diff = currentTime - self.timeBase;

        self.hours = Math.floor(diff/3600000) + "";
        self.minutes = Math.floor(diff/60000) + "";
        self.seconds = Math.floor(diff/1000) + "";
        self.miniSeconds = diff%1000 + "";

        updateTimeCounter();
      }, 1000)
    }else{
      clearInterval(this.interval);

      self.isCounting = false;
      self.timeBase = null;

      self.hours = "00"
      self.minutes = "00";
      self.seconds = "00";
      self.miniSeconds = "000";

      updateTimeCounter();
    }

    function updateTimeCounter() {
      //console.log('hours', self.hours);
      //console.log('minutes', self.minutes);
      //console.log('seconds', self.seconds);
      prependZeros();
      self.timeCounter = self.hours + ":" + self.minutes + ":" + self.seconds + ":" + self.miniSeconds;
    }

    function prependZeros(){
      self.hours = prependZero(self.hours);
      self.minutes = prependZero(self.minutes);
      self.seconds = prependZero(self.seconds);
      self.miniSeconds = prependZero(self.miniSeconds);
    }

    function prependZero(it){
      //console.log('before', it);
      if (it.length === 1){
        it = "0" + self.hours;
      }
      //console.log('after', it);
      return it;
    }
  }
}
