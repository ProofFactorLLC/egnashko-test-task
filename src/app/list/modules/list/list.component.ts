import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {OptionInterface} from '../../interfaces';
import {RuleOption} from '../../enums';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'blockAdd',
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
export class ListComponent {

  form = this.formBuilder.group({
    campaignRules: this.formBuilder.array([])
  });

  ruleOptions: OptionInterface<RuleOption>[] = [
    {
      label: RuleOption.Contains,
      value: RuleOption.Contains,
    },
    {
      label: RuleOption.ExactMatch,
      value: RuleOption.ExactMatch,
    }
  ];

  get campaignRules(): FormArray {
    return this.form.get('campaignRules') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  addCampaignRule(): void {
    const campaignRule = this.formBuilder.group({
      ruleOption: [RuleOption.Contains],
      urls: [null, Validators.required],
    });

    this.campaignRules.push(campaignRule);
  }

  removeCampaignRule(index: number): void {
    this.campaignRules.removeAt(index);
  }
}
