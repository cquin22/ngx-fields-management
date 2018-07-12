import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-password-hide',
  templateUrl: './password-hide.component.html',
  styleUrls: ['./password-hide.component.scss']
})
export class PasswordHideComponent  {

  public myModel: string;
  public showPassword: boolean;

  @Input()
  public placeholder: string;
  @Input()
  public configForm: FormGroup;
  @Input()
  public controlName: string;
  @Input()
  public isSubmittedForm: boolean;

  constructor(
    public dynamicFormService: DynamicFormService
  ){

  }


  public toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
