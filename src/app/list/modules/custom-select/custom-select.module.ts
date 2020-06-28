import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CustomSelectComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [CustomSelectComponent],
})
export class CustomSelectModule { }
