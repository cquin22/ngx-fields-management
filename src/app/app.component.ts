import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from "./ng-fields-core/services/dynamic-form.service";
import {FormGroup} from "@angular/forms";
import {IField} from "../interfaces";
import {FORM_EXAMPLE} from "./form-example.constant";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public form: FormGroup;
  public fields: Array<IField> = FORM_EXAMPLE;

  constructor(
    private dynamicFormService: DynamicFormService,
    private translate: TranslateService
  ) {
      this.translate.setDefaultLang('es');
      this.translate.use('es');
  }

  ngOnInit(){
    const orderFieldsLogin = this.dynamicFormService.orderArrayFields(this.fields);
    this.form = this.dynamicFormService.buildForm(orderFieldsLogin);
  }
}
