import { Component, OnInit, Input, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomCheckboxComponent), multi: true }
  ]
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {

  writeValue(obj: any): void {
    this.isSelected = obj;
    console.log(obj);
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  // call if value was changed inside our component
  private _onChange = (_: any) => { };
  // call if input was "touched" .. !
  private _onTouched = () => { };

  @Input() label: String;

  isSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleCheckbox() {
    this.isSelected = !this.isSelected;
    this._onChange(this.isSelected);
  }

}
