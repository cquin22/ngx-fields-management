import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "ng2-file-upload";
import {NgxMaskModule} from 'ngx-mask';
import {ClickOutsideModule} from 'ng-click-outside';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CustomInputComponent} from './components/form-controls/custom-input/custom-input.component'
import {DynamicFormService} from "./services/dynamic-form.service";
import {FieldsGroupComponent} from "./components/form-controls/fields-group/fields-group.component";
import {CustomErrorComponent} from "./components/form-controls/custom-error/custom-error.component";
import {CustomListComponent} from "./components/form-controls/custom-list/custom-list.component";
import {CustomPhoneComponent} from "./components/form-controls/custom-phone/custom-phone.component";
import {CustomRadioComponent} from "./components/form-controls/custom-radio/custom-radio.component";
import {ListExpirationDateCcComponent} from "./components/form-controls/list-expiration-date-cc/list-expiration-date-cc.component";
import {PasswordChangeComponent} from "./components/form-controls/password-change/password-change.component";
import {PasswordHideComponent} from "./components/form-controls/password-hide/password-hide.component";
import {UploadComponent} from "ng-field-management/src/components/form-controls/upload/upload.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        FileUploadModule,
        NgxMaskModule.forRoot(),
        ClickOutsideModule,
        FileUploadModule,
        CurrencyMaskModule,
    ],
    declarations: [
        CustomInputComponent,
        FieldsGroupComponent,
        CustomErrorComponent,
        CustomListComponent,
        CustomPhoneComponent,
      CustomRadioComponent,
      ListExpirationDateCcComponent,
      PasswordChangeComponent,
      PasswordHideComponent,
      UploadComponent
    ],
    exports: [
        CustomInputComponent,
        FieldsGroupComponent,
        CustomErrorComponent,
        CustomListComponent,
        CustomPhoneComponent,
      CustomRadioComponent,
      ListExpirationDateCcComponent,
      PasswordChangeComponent,
      PasswordHideComponent,
      UploadComponent
    ]
})
export class NgFieldManagmentModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgFieldManagmentModule,
            providers: [ DynamicFormService ]
        };
    }
}
