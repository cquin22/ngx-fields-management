import {IField} from "../interfaces";
import {DataTableType} from "../enums";


export const FORM_EXAMPLE: Array<IField> = [
  {
    'type': DataTableType.STRING,
    'model': 'email',
    'value': '',
    'placeHolder': 'EMAIL_PLACEHOLDER',
    'validations': [
      {
        'type': 'required',
        'value': null
      },
      {
        'type': 'email',
        'value': null
      }
    ],
    'listValue': null,
    'mask': null,
    'position': null,
    'group': null,
    'order': 2
  },
];
