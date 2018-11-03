export interface IPaymentMethod {

  number: string;
  cvv: string;
  termination: string;
  sanitized_type: string;
  default: boolean;
  bin: string;
}
