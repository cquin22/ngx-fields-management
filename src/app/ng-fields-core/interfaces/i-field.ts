import {IFieldPosition} from "./i-field-position";
import {DataTableType} from "../enums";
import {IFormValidation} from "./i-form-validation";

export interface IField {
  type?: DataTableType ;
  model?: string;
  value?: string;
  placeHolder?: string;
  label?: string;
  validations?: Array<IFormValidation>;
  listValue?: Array<any>;
  contextRequest?: string;
  mask?: string;
  position?: IFieldPosition;
  group?: Array<IField>;
  order?: number;
}
