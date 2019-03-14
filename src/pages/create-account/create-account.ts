import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { Students } from '../../model/students.model';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  createAccountForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fb:FormBuilder,
    private student_provider:StudentsServiceProvider,
    private loadingControler:LoadingController,
    private events_manager:EventsManagerProvider) {
    this.createAccountForm=this.fb.group({
      name:['',Validators.required],
      app:['',Validators.required],
      apm:[''],
      email:['',[Validators.required, Validators.email]],
      matricula:['',Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
  confirm(){
    let presentLoading = this.loadingControler.create({
      content: 'Espere por favor'
    });
    let accountInfo: Students = this.createAccountForm.getRawValue();
    this.student_provider.
        createAccountStudents(accountInfo).
        subscribe(  ()=> {
          console.log('Data'); 
          this.events_manager.setMsgToast("Cuenta creada con éxito");  
          this.navCtrl.popToRoot();
        }, error =>{
          console.log('Error', error); 
          presentLoading.dismiss();         
        }, ()=>{
          console.log('Success');
          presentLoading.dismiss();
          
        });    
  }

}
