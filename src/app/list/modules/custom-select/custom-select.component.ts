import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputDirective} from '../../directives/base-input.directive';
import {OptionInterface} from '../../interfaces';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent<T> extends BaseInputDirective<FormControl> {
  @Input() options: OptionInterface<T>[];
}
