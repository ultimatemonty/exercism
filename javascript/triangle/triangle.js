export class Triangle {
  sides;
  uniqueSides;
  _isValid = true;

  constructor(...sides) {
    this.sides = sides;
    this.uniqueSides = new Set(sides);
    this.validate();
  }

  get isEquilateral() {
    return this._isValid && this.uniqueSides.size === 1;
  }

  get isIsosceles() {
    return this._isValid && this.uniqueSides.size === 2;
  }

  get isScalene() {
    return this._isValid && !this.isEquilateral && !this.isIsosceles;
  }

  validate() {
    if (
      this.sides.length < 3 ||
      this.sides.reduce((total, side) => { return total + side; }) <= 0
    ) {
      this._isValid = false;
    }
  }
}
