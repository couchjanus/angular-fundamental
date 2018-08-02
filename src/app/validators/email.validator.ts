import { AbstractControl } from '@angular/forms';

export function ValidateMail(control: AbstractControl) {
    const email = control.value;
    if (email && email.indexOf('@') !== -1) {
      const [, domain] = email.split('@');
      if (domain !== '') {
        return {
            validMail: true
        };
      }
    }
    return null;
}
