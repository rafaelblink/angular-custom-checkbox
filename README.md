# Angular Custom Checkbox 

[![NPM](https://nodei.co/npm/angular-custom-checkbox.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/angular-custom-checkbox/)

This is a very simple library to create custom checkboxes with Angular 2+ projects.

**PS: This library use [pretty-checkbox](https://lokesh-coder.github.io/pretty-checkbox) to create the customs checkboxes.**

## Demo

http://rafaelferreira.info/angular-custom-checkbox/

## Quick start

- Install with [npm](https://www.npmjs.com/).

```bash
npm install angular-custom-checkbox --save
```

- Into your ``app.module.ts`` load the ``CustomCheckboxModule`` and add your imports.

```bash
import { CustomCheckboxModule } from 'angular-custom-checkbox';
```
 Adding in your imports.

```bash 
  imports: [
    ...
    CustomCheckboxModule,
    ...
  ],
```

Ok, your library is installed :)
Let's go create the first checkbox.

## Basic Configuration

### TS
```bash
import { CustomCheckBoxModel } from 'angular-custom-checkbox';
...

export class AppExampleComponent implements OnInit  {  
  isSelected: boolean = false;
  jsonModel: CustomCheckBoxModel = new CustomCheckBoxModel();
}

```
### HTML
```bash
<ngx-checkbox [configuration]="jsonModel" [(ngModel)]="isSelected" name="isSelected"></ngx-checkbox>
```

**PS: Use variable on ngModel as boolean.**

**Colors Available:**

- p-primary
- p-success 
- p-danger
- p-info
- p-warning

## Advanced Configuration

```bash
this.jsonModel.color = 'p-success';
this.jsonModel.colorHex = '#F500FF';
this.jsonModel.rounded = true;
this.jsonModel.icon = 'mdi mdi-check';
```

## Icons:

You can use some icons frameworks like **Material Design Icons** or **Font-Awesome**.

```bash 
npm install mdi --save
```
OR

```bash 
npm install font-awesome --save
```

Import the css files to your ``.angular-cli.json`` like:

```bash
"styles": [
  "styles.css",
  "../node_modules/mdi/css/materialdesignicons.min.css",
  "../node_modules/font-awesome/css/font-awesome.min.css"
],
```

And use for example: 

```bash 
this.jsonModel.icon = 'fa fa-check';
```
