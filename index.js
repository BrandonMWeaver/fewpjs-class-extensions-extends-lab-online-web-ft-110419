class Polygon {
  constructor(sides) {
    this._sides = sides;
  }
  
  get countSides() {
    return this._sides.length;
  }
  
  get perimeter() {
    return this._sides.reduce((memo, side) => memo + side, 0);
  }
}

class Triangle extends Polygon {
  
}
