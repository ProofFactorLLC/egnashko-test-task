import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputDirective} from '../../directives/base-input.directive';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('.3s ease-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('.1s ease-in', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class CustomInputComponent extends BaseInputDirective<FormControl> {
  @Input() placeholder?: string;
  @Input() errorMessage?: string;
}
