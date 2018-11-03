import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IField, IFieldPosition} from "../../../../interfaces";
import {DataTableType} from "../../../../enums";


@Component({
  selector: 'ngx-field-group',
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

  constructor(){

  }

  public dataTableType: typeof DataTableType = DataTableType;



  public typeIsEqual(type: string, isEqual: DataTableType): boolean {
    return type === isEqual;
  }
}
