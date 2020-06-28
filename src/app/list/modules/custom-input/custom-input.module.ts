import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomInputComponent],
  exports: [CustomInputComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CustomInputModule { }
