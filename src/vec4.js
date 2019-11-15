export default class vec4 {
  constructor(x, y, z, w) {
    this.set(x, y, z, w)
  }

  set(x, y, z, w) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
    this.w = w || 0
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
  }

  copy() {
    return new vec4(this.x, this.y, this.z, this.w)
  }

  addVec(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    this.w += v.w
    return this
  }

  addNum(n) {
    this.x += n
    this.y += n
    this.z += n
    this.w += n
    return this
  }

  subtractVec(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
    return this
  }

  subtractNum(n) {
    this.x -= n
    this.y -= n
    this.z -= n
    this.w -= w
    return this
  }

  scaleVec(v) {
    this.x *= v.x
    this.y *= v.y
    this.z *= v.z
    this.w *= v.w
    return this
  }

  scaleNum(n) {
    this.x *= n
    this.y *= n
    this.z *= n
    this.w *= n
    return this
  }

  divideVec(v) {
    this.x /= v.x
    this.y /= v.y
    this.z /= v.z
    this.w /= v.w
    return this
  }

  divideNum(n) {
    this.x /= n
    this.y /= n
    this.z /= n
    this.w /= n
    return this
  }

  lerp(v, t) {
    this.x += (v.x - this.x) * t
    this.y += (v.y - this.y) * t
    this.z += (v.z - this.z) * t
    this.w += (v.w - this.w) * t
    return this
  }
}
