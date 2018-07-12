import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent  {

  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;
  @Input() dataRadioList: Array<any>;

  constructor(
    public dynamicFormService: DynamicFormService
  ) { }

}
