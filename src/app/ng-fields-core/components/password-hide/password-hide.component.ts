import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('fileInput') fileInput:ElementRef;

  @Input()
  public placeholder: string;
  @Input()
  public configForm: FormGroup;
  @Input()
  public controlName: string;
  @Input()
  public isSubmittedForm: boolean;

  public focusValue: boolean;

  constructor(
    public dynamicFormService: DynamicFormService
  ) { }

  ngOnInit() {
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  public focusLabel(){
    setTimeout(() => {
      this.fileInput.nativeElement.click();
      this.fileInput.nativeElement.focus();
    }, 50);
  }

  public focus() {
    this.focusValue = true;
  }

  public focusOut() {
    let val = this.configForm.controls[this.controlName].value;
    if (val.length == 0){
      this.focusValue = false;
    }
  }

}
