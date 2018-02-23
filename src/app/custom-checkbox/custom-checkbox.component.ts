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
  @Input() icon: string;
  @Input() rounded?: boolean = false;
  @Input() color?: string;
  @Input() colorHex?: string;
  @Input() colorInside?: string;

  isSelected: boolean;
  styleCheckBox: String;
  styleColor: String;
  styleIcon: String;
  constructor() { }

  ngOnInit() {
    
    // STYLE CHECKBOX
    this.styleCheckBox = 'pretty p-icon p-smooth';
    if (this.rounded) this.styleCheckBox += ' p-round';
    //if (this.curved) this.styleCheckBox += ' p-curve';
    
    // COLORS CHECKBOX
    this.styleColor = 'state ';
    if (this.color) this.styleColor += this.color;
    
    this.styleIcon = 'icon ';
    if(this.icon) this.styleIcon += this.icon;
    
  }

  ngAfterViewInit() {
  }

  toggleCheckbox() {
    this.isSelected = !this.isSelected;
    this._onChange(this.isSelected);
  }

}
