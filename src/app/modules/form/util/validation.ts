import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controlName ? controls.get(controlName) : null;
      const checkControl = checkControlName ? controls.get(checkControlName) : null;

      if (checkControl && checkControl.errors && !checkControl.errors['matching']) {
        return null;
      }

      if ( control && control.value !== checkControl.value) {
        controls.get(checkControlName).setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
