export class CustomCheckBoxModel {
    icon?: String;
    rounded?: boolean = false;
    color?: String;
    colorHex?: String;
    colorInside?: String;
  
    constructor(icon?: String, rounded?: boolean, color?: String, colorHex?: String, colorInside?: String) {
      this.icon = icon;
      this.rounded = rounded;
      this.color = color;
      this.colorHex = colorHex;
      this.colorInside = colorInside;
     }
  }