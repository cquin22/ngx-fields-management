import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent  {

  @Input() placeholder: string;
  @Input() mask: string;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;


  constructor(
    public dynamicFormService: DynamicFormService
  ) { }

}
