import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from "../../services";


@Component({
  selector: 'ngx-field-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.scss']
})
export class CustomErrorComponent {

  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;

  constructor(
    public dynamicFormService: DynamicFormService
  ) { }

}
