import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IFormValidation} from "../interfaces/i-form-validation";
import {ValidationsType} from "../enums/validations.type";
import {IField} from "../interfaces/i-field";
import {IControlConfig} from "../interfaces/i-control-config";
import {IFieldPosition} from "../interfaces/i-field-position";
import {FieldPositionColumnType} from "../enums/field-position-colum.type";


@Injectable()
export class DynamicFormService {

  constructor(
    private formBuilder: FormBuilder
  ){}

  // Private methods

  private buildErrors(validator: IFormValidation): Validators {

    switch (validator.type ){
      case ValidationsType.REQUIRED:
        return Validators.required;
      case  ValidationsType.PATTERN:
        return Validators.pattern(validator.value);
      case  ValidationsType.MIN:
        return Validators.min(validator.value);
      case  ValidationsType.MAX:
        return Validators.max(validator.value);
      case  ValidationsType.EMAIL:
        return Validators.email;
    }

  }

  private setDefaultFormObject(field: IField, formObject: Object): Object{
    formObject[field.model] = [];
    let config : IControlConfig = {
      value: field.value,
      disabled: false
    };
    config.disabled = false;
    formObject[field.model].push(config);
    const validators = [];
    for (const validator of field.validations){
      validators.push(this.buildErrors(validator));
    }

    formObject[field.model].push(Validators.compose(validators));

    return formObject;
  }

  private sortArray(fieldA: IField, fieldB: IField){
    let comparison = 0;
    if (fieldA.order > fieldB.order) {
      comparison = 1;
    } else if (fieldB.order > fieldA.order) {
      comparison = -1;
    }

    return comparison;
  }

  // Public methods

  public buildForm(fields: Array<IField>): FormGroup {
    let formObject = new Object();
    for (let field of fields) {
      if(!field.validations){
        field.validations = [];
      }
      if(field.model){
        this.setDefaultFormObject(field, formObject);
      }else if(field.group){
        for(let groupField of field.group){
          this.setDefaultFormObject(groupField, formObject);
        }
      }
    }

    return this.formBuilder.group(formObject);
  }

  public splitArray(arr: Array<IField>, size): Array<Array<IField>> {
    var fieldList = [];
    var chunkCount = Math.ceil(arr.length/size);
    for (var i = 0; i < chunkCount; i++) {
      fieldList.push(arr.splice(0, size));
    }
    return fieldList
  }

  public orderArrayFields(fields: Array<IField>): Array<IField>{
    return fields.sort(this.sortArray);
  }


  public validForm(configForm: FormGroup, controlName, isSubmittedForm: boolean) : boolean {
    return !configForm.controls[controlName].valid && (configForm.controls[controlName].dirty) || ( isSubmittedForm && !configForm.controls[controlName].valid && !configForm.valid);
  }

  public validEmail(configForm: FormGroup, controlName, isSubmittedForm: boolean) : boolean {
    return configForm.controls[controlName].errors && (configForm.controls[controlName].touched && !configForm.controls[controlName].errors['required']) && configForm.controls[controlName].errors['email'];
  }

  public validRequired(configForm: FormGroup, controlName, isSubmittedForm: boolean) : boolean {
    return configForm.controls[controlName].errors && configForm.controls[controlName].errors['required'];
  }

  public ccValidator(configForm: FormGroup, controlName, type: string) : boolean {
    return configForm.controls[controlName].errors && (configForm.controls[controlName].touched && configForm.controls[controlName].errors[type]);
  }

  public ccDateValidator(configForm: FormGroup, controlName) : boolean {
    return configForm.get(controlName).errors && configForm.get(controlName).errors['creditCardDateError'];
  }

  public buildGridClass(position: IFieldPosition){
    let style = '';
    if(position){
      style = 'inline-bl';
      if(position.column === FieldPositionColumnType.RIGHT){
        style += ' right';
      }
      style += ' inline-form-' + position.width;
    }
    return style;
  }

}
