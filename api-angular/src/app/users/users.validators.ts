import {AbstractControl} from '@angular/forms';

export class UsersValidators {
  static passwordConfirming(c: AbstractControl): { [s: string]: boolean } {
    if (c.get('pwd') && c.get('confirmPwd')) {
      if (c.get('pwd').value !== c.get('confirmPwd').value) {
        return {invalid: true};
      }
    }
    return undefined;
  }
}
