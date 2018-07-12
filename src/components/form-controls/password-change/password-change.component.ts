import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DynamicFormService} from "../../../services/dynamic-form.service";


@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit{

  public myModel: string;
  public formPasswordChange: FormGroup;

  @Input()
  public placeholder: string;

  constructor(
    private modalService: NgbModal,
    public dynamicFormService: DynamicFormService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(){
    this.buildForm();
  }

  public openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public buildForm() {
    this.formPasswordChange = this.formBuilder.group({
      password: [{value: '', disabled: false}, Validators.compose([
        Validators.required
      ])],
      confirmPassword: [{value: '', disabled: false}, Validators.compose([
        Validators.required
      ])],
    })
  }

  public changePassword(formGroup: Object, isValid: boolean) {
    if(isValid){

    }
  }

}
