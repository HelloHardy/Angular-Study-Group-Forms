import { AbstractControl, ValidationErrors } from '@angular/forms';

export class HideOutValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') > 0) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
    }

    static isHideoutNameTaken(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'HTH') {
                    return resolve({
                        isHideoutNameTaken: true
                    });
                }

                return resolve(null);
            }, 2000);
        });
    }
}
