import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {DynamicFormService} from "../../services";


@Component({
  selector: 'ngx-field-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() mask: string;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;


  constructor(
    public dynamicFormService: DynamicFormService,
  ) {

  }

  ngOnInit(){

  }

}
