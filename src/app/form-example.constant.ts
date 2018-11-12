import {IField} from "../interfaces";
import {DataTableType, FieldPositionDisplayType, FieldPositionColumnType} from "../enums";



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
  {
    'type': DataTableType.PASSWORD,
    'model': 'password',
    'value': '',
    'placeHolder': 'PASSWORD_CREATE_PLACEHOLDER',
    'validations': [
      {
        'type': 'required',
        'value': null
      }
    ],
    'listValue': null,
    'mask': null,
    'position': null,
    'group': null,
    'order': 5
  },
  {
    'type': DataTableType.GROUP,
    'model': null,
    'value': null,
    'placeHolder': null,
    'validations': null,
    'listValue': null,
    'mask': null,
    'position': null,
    'group': [
      {
        'type': DataTableType.PASSWORD,
        'model': 'password',
        'value': '',
        'placeHolder': 'PASSWORD_CREATE_PLACEHOLDER',
        'validations': [
          {
            'type': 'required',
            'value': null
          }
        ],
        'listValue': null,
        'mask': null,
        'position': {
          'column': FieldPositionColumnType.LEFT,
          'display': FieldPositionDisplayType.INLINE_FLEX,
          'width': '50'
        },
        'group': null,
        'order': 5
      },
      {
        'type': DataTableType.PASSWORD,
        'model': 'password_confirmation',
        'value': '',
        'placeHolder': 'PASSWORD_CONFIRMATION_PLACEHOLDER',
        'validations': [
          {
            'type': 'required',
            'value': null
          }
        ],
        'listValue': null,
        'mask': null,
        'position': {
          'column': FieldPositionColumnType.RIGHT,
          'display': FieldPositionDisplayType.INLINE_FLEX,
          'width': '50'
        },
        'group': null,
        'order': 5
      }
    ]
  },
  {
    'type': DataTableType.GROUP,
    'model': null,
    'value': null,
    'placeHolder': null,
    'validations': null,
    'listValue': null,
    'mask': null,
    'position': null,
    'group': [
      {
        'type': DataTableType.LIST,
        'model': 'age',
        'value': '',
        'placeHolder': 'AGE_CREATE_PLACEHOLDER',
        'validations': [
          {
            'type': 'required',
            'value': null
          }
        ],
        'listValue': [
            "18","19"
        ],
        'mask': null,
        'position': {
          'column': FieldPositionColumnType.LEFT,
          'display': FieldPositionDisplayType.INLINE_FLEX,
          'width': '50'
        },
        'group': null,
        'order': 5
      },
      {
        'type': DataTableType.STRING,
        'model': 'phone',
        'value': '',
        'placeHolder': 'PHONE_PLACEHOLDER',
        'validations': [
          {
            'type': 'required',
            'value': null
          }
        ],
        'listValue': null,
        'mask': '000 000 0000',
        'position': {
          'column': FieldPositionColumnType.RIGHT,
          'display': FieldPositionDisplayType.INLINE_FLEX,
          'width': '50'
        },
        'group': null,
        'order': 5
      }
    ]
  },
];
