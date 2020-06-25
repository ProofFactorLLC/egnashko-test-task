import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {RuleModule} from './modules/rule';
import {ListRoutingModule} from './list-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, ListRoutingModule, RuleModule
  ]
})
export class ListModule { }
