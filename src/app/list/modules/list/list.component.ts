import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {OptionInterface} from '../../interfaces';
import {RuleOption} from '../../enums';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      ruleOption: [null],
      urls: [null, Validators.required],
    });

    this.campaignRules.push(campaignRule);
  }

  removeCampaignRule(index: number): void {
    this.campaignRules.removeAt(index);
  }
}
