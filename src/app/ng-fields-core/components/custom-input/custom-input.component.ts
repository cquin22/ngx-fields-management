import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {DynamicFormService} from "../../services";


@Component({
  selector: 'ngx-field-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @ViewChild('fileInput') fileInput:ElementRef;

  @Input() placeholder: string;
  @Input() mask: string;
  @Input() configForm: FormGroup;
  @Input() controlName: string;
  @Input() isSubmittedForm: boolean;

  public focusValue: boolean;


  constructor(
    public dynamicFormService: DynamicFormService,
  ) {

  }

  ngOnInit(){

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
