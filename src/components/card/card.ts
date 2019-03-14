import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Students } from '../../model/students.model';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input ('student') student:Students;
  @Output ('click-card') card= new EventEmitter<any>();

  constructor() {
    console.log('Hello CardComponent Component');
  }

  clickCard(student:Students){
    this.card.emit(this.student);

  }

}
