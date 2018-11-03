import {IPaymentMethod} from "./i-payment-method";

export interface ICcOutputValue {
  validForm: boolean;
  ccValue: IPaymentMethod;
}
