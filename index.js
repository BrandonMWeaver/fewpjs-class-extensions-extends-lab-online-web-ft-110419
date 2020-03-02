class Polygon {
  constructor(sides) {
    this._sides = sides;
  }
  
  get countSides() {
    return this._sides.length;
  }
}
