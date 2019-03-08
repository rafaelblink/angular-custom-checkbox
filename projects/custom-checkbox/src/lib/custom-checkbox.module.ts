import { NgModule } from '@angular/core';
import { CustomCheckboxComponent } from './custom-checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomCheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomCheckboxComponent]
})
export class CustomCheckboxModule { }
