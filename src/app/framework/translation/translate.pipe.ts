import { Pipe, PipeTransform }  from '@angular/core';
import { LANG_TYPES }           from '../app-type';
import { trans_HI }             from './trans_HI';
import { TRANS_EN }             from './trans_EN';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value : string, ...args: string[]): string {
    
    let lang    : string  = localStorage.getItem('lang'),
        useLang : object   

    switch (lang) {

      case  LANG_TYPES.HI : {
        useLang = trans_HI
      } break

      case  LANG_TYPES.EN : {
        useLang = TRANS_EN
      }

      default : {
        useLang = TRANS_EN
      }
    }

    return useLang[value] ? useLang[value]  : value
  }

}
