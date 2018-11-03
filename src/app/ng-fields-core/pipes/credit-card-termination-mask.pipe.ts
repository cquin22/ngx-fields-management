import {Pipe, PipeTransform} from "@angular/core";
import * as creditCardType from 'credit-card-type';
import {getTypeInfo, types as CardType} from 'credit-card-type';
const globalCcType = creditCardType;

@Pipe({
  name: 'creditCardTerminationMaskPipe'
})
export class CreditCardTerminationMaskPipe implements PipeTransform {
  public transform(value: any, bin?: string): string{
    const ccType = globalCcType(bin);
    const selectedCCType = ccType.length === 1 ? ccType[0].type : '';
    switch (selectedCCType) {
      case CardType.VISA:
      case CardType.MASTERCARD:
      case CardType.DISCOVER:
      case CardType.JCB:
        return 'XXXX-XXXX-XXXX-' + value;
      case CardType.AMERICAN_EXPRESS:
        return 'XXX-XXXXXX-X'+value;
      case CardType.DINERS_CLUB:
        return 'XXXX-XXXXXX-' + value;
      default:
        return '';
    }
  }
}
