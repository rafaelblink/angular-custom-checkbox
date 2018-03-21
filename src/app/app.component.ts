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
  jsonModel: CustomCheckBoxModel;

  ngOnInit() {
    this.jsonModel = new CustomCheckBoxModel('Test', 'fa fa-check', true, 'p-success', null, '#FFF');
  }
}
