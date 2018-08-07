import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    providers: [
        {
            multi: true,
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EmailValidatorDirective),
        },
    ],
    selector: '[appEmailValidator]',
})
export class EmailValidatorDirective implements Validator {

    /* tslint:disable */
    private emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* tslint:enable */

    @Input()
    public emailMessage: string;

    constructor() {}

    public validate(control: FormControl): {} {
        if (!control || !control.value) {
            return null;
        }

        return this.emailRegex.test(control.value) ? null : this.getValidationMessage();
    }

    private getValidationMessage() {
        const message = (this.emailMessage) ? this.emailMessage : 'Please provide a valid email adress';
        return {
            email: {
                message: message,
                order: 1,
            }
        };
    }
}
