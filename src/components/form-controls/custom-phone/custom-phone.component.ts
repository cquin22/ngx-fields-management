import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-custom-phone',
  templateUrl: './custom-phone.component.html',
  styleUrls: ['./custom-phone.component.scss']
})
export class CustomPhoneComponent  {

  public showSubMenu: boolean;

  @Input() placeholder: string;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;

  constructor(
    public dynamicFormService: DynamicFormService
  ) { }


  public toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

}
