import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MiPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'miPipe',
})
export class MiPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defaultText = 'Sin texto') {
    return (value) ? value: defaultText;
  }
}
