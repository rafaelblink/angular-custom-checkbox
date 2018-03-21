export class CustomCheckBoxModel {
  label: String;
  icon: String;
  rounded?: boolean = false;
  color?: String;
  colorHex?: String;
  colorInside?: String;

  constructor(label: String, icon: String, rounded?: boolean, color?: String, colorHex?: String, colorInside?: String) {
    this.label = label;
    this.icon = icon;
    this.rounded = rounded;
    this.color = color;
    this.colorHex = colorHex;
    this.colorInside = colorInside;
   }
}