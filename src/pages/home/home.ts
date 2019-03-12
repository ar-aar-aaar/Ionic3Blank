import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  group:string;
  money:number;
  groups: string[]=[
    "Uno","Dos",
    "Ultraviolento"
  ];

  constructor(public navCtrl: NavController) {
    

  }

  goAbout(){
    let data = {user:this.user, group:this.group,
      date:new Date(), money:this.money,
      groups:this.groups};
      console.log(data);
      
    this.navCtrl.push(AboutPage, data);
  }
}
