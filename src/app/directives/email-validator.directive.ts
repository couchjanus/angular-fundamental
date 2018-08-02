import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

// function validateEmailFactory(emailBlackList: EmailBlackList) {
function validateEmailFactory() {
  return (c: FormControl) => {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      appValidateEmail: {
        valid: false
      }
    };
  };
}

@Directive({
  selector: '[appValidateEmail][ngModel],[appValidateEmail][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective {

  validator: Function;

  // constructor(emailBlackList: EmailBlackList) {
  //   this.validator = validateEmailFactory(emailBlackList);
  // }
  constructor() {
    this.validator = validateEmailFactory();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
