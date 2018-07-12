import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IField} from '../../../interfaces/i-field';
import {IFieldPosition} from '../../../interfaces/i-field-position';
import {DataTableType} from '../../../enums/data-table.type';

@Component({
  selector: 'app-fields-group',
  templateUrl: './fields-group.component.html',
  styleUrls: ['./fields-group.component.scss']
})
export class FieldsGroupComponent  {

  @Input() placeholder: string;
  @Input() mask: string;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;
  @Input() options: Array<string>;
  @Input() field: IField;
  @Input() position: IFieldPosition;

  public dataTableType: typeof DataTableType = DataTableType;



  public typeIsEqual(type: string, isEqual: DataTableType): boolean {
    return type === isEqual;
  }
}
