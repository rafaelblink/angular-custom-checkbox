# Angular Custom Checkbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

This is a very simple library to create custom checkboxes to Angular 2+ projects.

**PS: This library use [pretty-checkbox](https://lokesh-coder.github.io/pretty-checkbox) to create the customs checkboxes.**

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

```bash
<ngx-checkbox [label]="'Checkbox 1'" [color]="'p-success'" [rounded]="true" [(ngModel)]="isSelected" name="isSelected"></ngx-checkbox>
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
<ngx-checkbox [label]="'Checkbox 2'" [colorHex]="'#F500FF'" [colorInside]="'#FFF'" [rounded]="true" [icon]="'mdi mdi-check'" [(ngModel)]="isSelected" name="isSelected"></ngx-checkbox>
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

And use for example: ``[icon]="'fa fa-check'"``.