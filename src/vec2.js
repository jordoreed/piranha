export default class vec2 {
  constructor(x, y) {
    this.set(x, y)
  }

  set(x, y) {
    this.x = x || 0
    this.y = y || 0
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }

  copy() {
    return new vec2(this.x, this.y)
  }

  addVec(v) {
    this.x += v.x
    this.y += v.y
    return this
  }

  addNum(n) {
    this.x += n
    this.y += n
    return this
  }

  subtractVec(v) {
    this.x -= v.x
    this.y -= v.y
    return this
  }

  subtractNum(n) {
    this.x -= n
    this.y -= n
    return this
  }

  scaleVec(v) {
    this.x *= v.x
    this.y *= v.y
    return this
  }

  scaleNum(n) {
    this.x *= n
    this.y *= n
    return this
  }

  divideVec(v) {
    this.x /= v.x
    this.y /= v.y
    return this
  }

  divideNum(n) {
    this.x /= n
    this.y /= n
    return this
  }

  normalize() {
    const magnitude = this.length()
    if (magnitude !== 0) {
      this.x /= magnitude
      this.y /= magnitude
    }
    return this
  }

  lerp(v, t) {
    this.x += (v.x - this.x) * t
    this.y += (v.y - this.y) * t
    return this
  }

  reflect(normal) {
    const dot = normal.dot(this)
    this.x -= (normal.x * 2 * dot)
    this.y -= (normal.y * 2 * dot)
    return this
  }

  rotate(degrees, originX, originY) {
    const cosA = Math.cos((Math.PI / 180.0) * degrees)
    const sinA = Math.sin((Math.PI / 180.0) * degrees)
    const minX = this.x - originX
    const minY = this.y - originY
    this.x = ((minX * cosA) - (minY * sinA)) + originX
    this.y = ((minX * sinA) + (minY * cosA)) + originY
    return this
  }

  dot(v) {
    return (this.x * v.x) + (this.y * v.y)
  }

  length() {
    return Math.sqrt(this.dot(this))
  }

  distance(v) {
    return this.copy().subtractVec(v).length()
  }

  angle(v) {
    return Math.acos(clamp(this.dot(v), -1.0, 1.0))
  }
}
