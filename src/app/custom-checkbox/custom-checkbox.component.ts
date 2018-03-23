import {
  Component,
  OnInit,
  Input,
  ViewChild,
  forwardRef
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NgModel,
  ControlValueAccessor
} from '@angular/forms';
import {
  CustomCheckBoxModel
} from './custom-checkbox.model';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCheckboxComponent),
    multi: true
  }]
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {

  writeValue(obj: any): void {
    this.isSelected = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState ? (isDisabled: boolean) : void {}

  // call if value was changed inside our component
  private _onChange = (_: any) => {};
  // call if input was "touched" .. !
  private _onTouched = () => {};

  // @Input() label: String;
  // @Input() icon: string;
  // @Input() rounded ? : boolean = false;
  // @Input() color ? : string;
  // @Input() colorHex ? : string;
  // @Input() colorInside ? : string;
  @Input() configuration: CustomCheckBoxModel;

  isSelected: boolean;
  styleCheckBox: String;
  styleColor: String;
  styleIcon: String;
  constructor() {}

  ngOnInit() {    
    // STYLE CHECKBOX
    this.styleCheckBox = 'pretty p-icon p-smooth';

    if (this.configuration.rounded) this.styleCheckBox += ' p-round';

    // COLORS CHECKBOX
    this.styleColor = 'state ';
    if (this.configuration.color) this.styleColor = `${this.styleColor}${this.configuration.color}`;

    this.styleIcon = 'icon ';
    if (this.configuration.icon) {
      this.styleIcon = `${this.styleIcon}${this.configuration.icon}`;
    }
    else {
      this.styleIcon = `${this.styleIcon}`;
    }
  }

  ngAfterViewInit() {}

  toggleCheckbox() {
    this.isSelected = !this.isSelected;
    this._onChange(this.isSelected);
  }

}
