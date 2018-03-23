import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCheckboxComponent } from './custom-checkbox.component';
import { CustomCheckBoxModel } from './custom-checkbox.model';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomCheckboxComponent
  ],
  declarations: [CustomCheckboxComponent]
})
export class CustomCheckboxModule { }