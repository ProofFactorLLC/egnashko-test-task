import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CustomInputModule } from '../custom-input';
import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {CustomSelectModule} from '../custom-select';

@NgModule({
  declarations: [ListComponent],
  imports: [
    ListRoutingModule, CommonModule, ReactiveFormsModule, CustomInputModule, CustomSelectModule,
  ],
  providers: [],
})
export class ListModule { }
