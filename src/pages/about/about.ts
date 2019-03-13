import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  user:string;
  data: any;
  colorLabel:any;
  color:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.data;
    this.user= this.navParams.get('user');
    
    console.log(this.data.groups);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goCustomer(){
    setTimeout(()=> {
      this.colorLabel='danger';
    }, 3*1000);
        //this.navCtrl.push(CustomerPage);
  }

}
