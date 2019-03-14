import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../model/students.model';
import { CREATE_USER, DELETE_STUDENT } from '../../endpoints/endpoints';
import { GET_USERS} from '../../endpoints/endpoints';

/*
  Generated class for the StudentsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentsServiceProvider Provider');
  }

  createAccountStudents(account:Students){
    return this.http.post(CREATE_USER,account);
  }

  getStudents(){
    return this.http.get(GET_USERS);
  }

  deleteStudent(id:number){
    return this.http.delete(`${DELETE_STUDENT}${id}`);
  }

}
