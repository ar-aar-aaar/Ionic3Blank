import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginProvider } from '../../providers/login/login';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

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
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    private fb:FormBuilder, 
    private login_provider:LoginProvider,
    private events_manager:EventsManagerProvider) {
    this.loginForm= this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });

  }

  goAbout(){
    let data = {user:this.user, group:this.group,
      date:new Date(), money:this.money,
      groups:this.groups};
      console.log(data);
      
    this.navCtrl.push(AboutPage, data);
  }

  login(){
    this.events_manager.setIsLoading(true);
    this.login_provider
        .loginService(this.loginForm.get('user').value, this.loginForm.get('password').value)
        .subscribe(  (response)=> {
          console.log(response);  
          this.events_manager.setIsLoading(false);
          this.navCtrl.push(AboutPage, response);        
        }, error =>{
          console.log(error);  
          this.events_manager.setIsLoading(false);     
          this.events_manager.setMsgToast(error.error.message);
        }, ()=>{
          console.log('Success');
          
        }); 

  }

  goCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
}
