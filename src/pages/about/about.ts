import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

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
  nombre:string;
  colorLabel:any;
  color:any;
  students:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private student_provider: StudentsServiceProvider,
  private events_manager: EventsManagerProvider) {

      this.nombre=this.navParams.get('name');
      this.student_provider.getStudents().subscribe((response:any)=>{
        this.students=response;
        console.log(response);
      }, error => {
        console.log(error);
      });
    

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

  deleteCard(student){
    this.events_manager.setIsLoading(true);
    this.student_provider.deleteStudent(student.id).subscribe(() =>{
      this.events_manager.setIsLoading(false)
      this.events_manager.setMsgToast('Se eliminó correctamente');

    }, error =>{
      this.events_manager.setIsLoading(false)
      this.events_manager.setMsgToast('No eliminó correctamente');

    });
    console.log(student);
    
    
  }

}
