import { AbstractControl } from "@angular/forms";


export function ValidatePhoneNumber(control: AbstractControl) {
    if(!control.value?.match(/(0|\\+33)[1-9]([-. ]?[0-9]{2}){4}?/)) {
        return {"phoneNumber": true}
    }
    return null;
}