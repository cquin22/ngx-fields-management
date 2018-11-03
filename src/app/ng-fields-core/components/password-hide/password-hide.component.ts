import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicFormService} from "../../services";

@Component({
  selector: 'ngx-field-password-hide',
  templateUrl: './password-hide.component.html',
  styleUrls: ['./password-hide.component.scss']
})
export class PasswordHideComponent implements OnInit {

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
  ) { }

  ngOnInit() {
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
