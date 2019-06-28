// import { Directive, forwardRef, Attribute, provide } from '@angular/core';
// import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// @Directive({
//   selector: '[appEqualvalidator,formControlName]',
//   providers: [
//     provide(NG_VALIDATORS,
//       { useExisting: forwardRef(() => EqualvalidatorDirective), multi: true })
//   ]
// })
// export class EqualvalidatorDirective implements Validator {

//   constructor(@Attribute('appEqualvalidator') public appEqualvalidator: string) { }
//   validate(c: AbstractControl): { [key: string]: any } {
//     let v = c.value;
//     let e = c.root.find(this.appEqualvalidator);
//     // value not equal
//     if (e && v !== e.value) return {
//       validateEqual: false
//     }
//     return null;
//   }

// }
