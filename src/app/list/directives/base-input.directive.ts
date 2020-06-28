import {Directive, Injector} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NgControl} from '@angular/forms';

@Directive()
export abstract class BaseInputDirective<T extends AbstractControl> implements ControlValueAccessor {
  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
  get invalid(): boolean {
    return this.ngControl.invalid && this.ngControl.touched;
  }

  constructor(private injector: Injector) {}

  writeValue(value: unknown): void {}
  registerOnChange(onChange: (value: unknown) => void): void {}
  registerOnTouched(onTouched: () => void): void {}

  private get ngControl(): NgControl {
    return this.injector.get(NgControl);
  }
}
