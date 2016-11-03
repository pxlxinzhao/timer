import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Dialogs } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timeBase: any = null;
  interval: any = null;
  isCounting: boolean = false;

  timeCounter: string = "00:00:00:000";

  hours: any = "00"
  minutes: any = "00";
  seconds: any = "00";
  miniSeconds: any = "000";

  constructor(public navCtrl: NavController) {
  }

  showDialog(){
    Dialogs.alert('1','2','3');
  }

  toggleTimer(){
    let self = this;

    if (!self.isCounting){
      self.isCounting = true;
      self.timeBase = new Date().getTime();

      this.interval = setInterval(function(){

        let currentTime = new Date().getTime();
        let diff = currentTime - self.timeBase;

        self.hours = Math.floor(diff/3600000);
        self.minutes = Math.floor(diff%3600000/60000);
        self.seconds = Math.floor(diff%60000/1000);
        self.miniSeconds = diff%1000;

        self.hours += "";
        self.minutes += "";
        self.seconds += "";
        self.miniSeconds += "";


        updateTimeCounter();
      }, 1)
    }else{
      clearInterval(this.interval);

      self.isCounting = false;
      self.timeBase = null;

      if (!window.localStorage['records']){
        window.localStorage['records'] = JSON.stringify({});
      }

      var storedRecords = JSON.parse(window.localStorage['records']);
      storedRecords[new Date().getTime()] = self.timeCounter;

      window.localStorage['records'] = JSON.stringify(storedRecords);
    }

    function resetTime(){
      self.hours = "00"
      self.minutes = "00";
      self.seconds = "00";
      self.miniSeconds = "000";

      updateTimeCounter();
    }

    function updateTimeCounter() {
      prependZeros();
      self.timeCounter = self.hours + ":" + self.minutes + ":" + self.seconds + ":" + self.miniSeconds;
    }

    function prependZeros(){
      self.hours = makeIt2Digits(self.hours);
      self.minutes = makeIt2Digits(self.minutes);
      self.seconds = makeIt2Digits(self.seconds);
      self.miniSeconds = makeIt3Digits(self.miniSeconds);
    }

    function makeIt2Digits(it){
      if (it.length === 1){
        it = "0" + it;
      }
      return it;
    }

    function makeIt3Digits(it){
      it = makeIt2Digits(it);
      if (it.length === 2){
        it = "0" + it;
      }
      return it;
    }
  }
}
