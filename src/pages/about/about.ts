import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'about.html'
})
export class AboutPage {

  categories: string[] = [];
  records: any = {};

  constructor(public navCtrl: NavController) {
    this.categories.push('Default');

    if (window.localStorage['records']){
      this.records = JSON.parse(window.localStorage['records']);
    }
  }

  addRecord(name: string, record:string){
    if(this.records[name]){
      console.info('Record ' + name + ' already exists');
    }else{
      this.records[name] = record;
    }
  }
}
