import {Pipe, PipeTransform} from '@angular/core';
import * as creditCardType from 'credit-card-type';
import {getTypeInfo, types as CardType} from 'credit-card-type';
const globalCcType = creditCardType;

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {

  public transform(number: string): string {
    const ccType = globalCcType(number);
    const selectedCCType = ccType.length === 1 ? ccType[0].type : '';
        switch (selectedCCType) {
          case CardType.VISA:
          case CardType.MASTERCARD:
          case CardType.DISCOVER:
          case CardType.JCB:
            return '0000 0000 0000 0000';
          case CardType.AMERICAN_EXPRESS:
            return number.length === 14 ? '000 000000 00000' : '';
          case CardType.DINERS_CLUB:
            return '0000 000000 0000';
          default:
            return '';
        }
  }
}

