export class vec2 {
  constructor(x, y) {
    this.set(x, y);
  }

  set(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  copy() {
    return new vec2(this.x, this.y);
  }

  addVec(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  addNum(n) {
    this.x += n;
    this.y += n;
    return this;
  }

  subtractVec(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  subtractNum(n) {
    this.x -= n;
    this.y -= n;
    return this;
  }

  scaleVec(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  scaleNum(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  divideVec(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  divideNum(n) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  normalize() {
    const magnitude = this.length();
    if (magnitude !== 0) {
      this.x /= magnitude;
      this.y /= magnitude;
    }
    return this;
  }

  reflect(normal) {
    const dot = normal.dot(this);
    this.x -= (normal.x * 2 * dot);
    this.y -= (normal.y * 2 * dot);
    return this;
  }

  rotate(degrees, originX, originY) {
    const cosA = Math.cos((Math.PI / 180.0) * degrees);
    const sinA = Math.sin((Math.PI / 180.0) * degrees);
    const minX = this.x - originX;
    const minY = this.y - originY;
    this.x = ((minX * cosA) - (minY * sinA)) + originX;
    this.y = ((minX * sinA) + (minY * cosA)) + originY;
    return this;
  }

  dot(v) {
    return (this.x * v.x) + (this.y * v.y);
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  distance(v) {
    return this.copy().subtractVec(v).length();
  }

  angle(v) {
    return Math.acos(clamp(this.dot(v), -1.0, 1.0));
  }
}



export class vec3 {
  constructor(x, y, z) {
    this.set(x, y, z);
  }

  set(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  copy() {
    return new vec2(this.x, this.y, this.z);
  }

  addVec(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  addNum(n) {
    this.x += n;
    this.y += n;
    this.z += n;
    return this;
  }

  subtractVec(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  subtractNum(n) {
    this.x -= n;
    this.y -= n;
    this.z -= n;
    return this;
  }

  scaleVec(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  scaleNum(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
    return this;
  }

  divideVec(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  divideNum(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
    return this;
  }

  normalize() {
    const magnitude = this.length();
    if (magnitude !== 0) {
      this.x /= magnitude;
      this.y /= magnitude;
      this.z /= magnitude;
    }
    return this;
  }

  cross(v) {
    this.x = (this.y * v.z) - (this.z * v.y);
    this.y = (this.z * v.x) - (this.x * v.z);
    this.z = (this.x * v.y) - (this.y * v.x);
    return this;
  }

  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  distance(v) {
    return this.copy().subtractVec(v).length();
  }
}



export class vec4 {
  constructor(x, y, z, w) {
    this.set(x, y, z, w);
  }

  set(x, y, z, w) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 0;
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  }

  copy() {
    return new vec2(this.x, this.y, this.z, this.w);
  }

  addVec(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }

  addNum(n) {
    this.x += n;
    this.y += n;
    this.z += n;
    this.w += n;
    return this;
  }

  subtractVec(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }

  subtractNum(n) {
    this.x -= n;
    this.y -= n;
    this.z -= n;
    this.w -= w;
    return this;
  }

  scaleVec(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }

  scaleNum(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
    this.w *= n;
    return this;
  }

  divideVec(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    this.w /= v.w;
    return this;
  }

  divideNum(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
    this.w /= n;
    return this;
  }
}
