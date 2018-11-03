import {Pipe, PipeTransform} from '@angular/core';
import * as creditCardType from 'credit-card-type';
const globalCcType = creditCardType;

@Pipe({
  name: 'creditCardTypePipe'
})
export class CreditCardTypePipe implements PipeTransform {

  public transform(number: string): string {
    const ccType = globalCcType(number);
    return ccType.length === 1 ? ccType[0].type : 'default';
  }
}

