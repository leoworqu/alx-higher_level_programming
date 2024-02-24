#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // return an empty object if invalid arguments
    }
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
