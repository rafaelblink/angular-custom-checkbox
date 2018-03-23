import { Component, OnInit } from '@angular/core';
import { CustomCheckBoxModel } from './custom-checkbox/custom-checkbox.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  isSelected: boolean = true;
  isSelected2: boolean = true;
  jsonModel: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationPrimary: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationSuccess: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationDanger: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationInfo: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationWarning: CustomCheckBoxModel = new CustomCheckBoxModel();
  configurationCustom: CustomCheckBoxModel = new CustomCheckBoxModel();

  ngOnInit() {
    this.configurationPrimary.color = 'p-primary';
    this.configurationSuccess.color = 'p-success';
    this.configurationDanger.color = 'p-danger';
    this.configurationInfo.color = 'p-info';
    this.configurationWarning.color = 'p-warning';

    this.configurationCustom.colorHex = '#F500FF'
    this.configurationCustom.colorInside = '#FFF' //or 'white'
    this.configurationCustom.rounded = true;
    this.configurationCustom.icon = 'fa fa-pencil'
  }
}
