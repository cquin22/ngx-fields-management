import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent {

  @Input() placeholder: string;
  @Input() options: Array<string>;
  @Input() isInlineComponent: boolean;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;

  constructor(
    public dynamicFormService: DynamicFormService
  ) { }

}
