import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {NgxFieldManagerService} from "./services/ngx-field-manager.service";
import {CreditCardMaskPipe} from "./pipes/credit-card-mask.pipe";
import {CreditCardTerminationMaskPipe} from "./pipes/credit-card-termination-mask.pipe";
import {CreditCardTypePipe} from "./pipes/credit-card-type.pipe";
import {CustomInputComponent} from "./components/custom-input/custom-input.component";
import {FieldsGroupComponent} from "./components/fields-group/fields-group.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DynamicFormService} from "./services";
import { PasswordHideComponent } from './components/password-hide/password-hide.component';
import {CustomErrorComponent} from "./components/custom-error/custom-error.component";
import { CustomListBasicComponent } from './components/custom-list-basic/custom-list-basic.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forChild()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    CustomInputComponent,
    CreditCardMaskPipe,
    CreditCardTerminationMaskPipe,
    CreditCardTypePipe,
    FieldsGroupComponent,
    PasswordHideComponent,
    CustomErrorComponent,
    CustomListBasicComponent
  ],
  providers: [
    DynamicFormService
  ],
  declarations: [
    TestComponent,
    CustomInputComponent,
    CreditCardMaskPipe,
    CreditCardTerminationMaskPipe,
    CreditCardTypePipe,
    FieldsGroupComponent,
    CreditCardMaskPipe,
    CreditCardTerminationMaskPipe,
    CreditCardTypePipe,
    PasswordHideComponent,
    CustomErrorComponent,
    CustomListBasicComponent
  ]
})
export class NgFieldsCoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgFieldsCoreModule,
      providers: [
        NgxFieldManagerService,
        DynamicFormService
      ]
    };
  }
}
