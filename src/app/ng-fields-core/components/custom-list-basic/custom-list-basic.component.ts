import { Component, OnInit, Input } from '@angular/core';
import {DynamicFormService} from "../../services";
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-field-custom-list-basic',
  templateUrl: './custom-list-basic.component.html',
  styleUrls: ['./custom-list-basic.component.scss']
})
export class CustomListBasicComponent implements OnInit {

  @Input() placeholder: string;
  @Input() options: Array<any>;
  @Input() isInlineComponent: boolean;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;


  constructor(
    public dynamicFormService: DynamicFormService,
  ) { }

  ngOnInit() {
  }



}
