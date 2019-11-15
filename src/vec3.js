export default class vec3 {
  constructor(x, y, z) {
    this.set(x, y, z)
  }

  set(x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`
  }

  copy() {
    return new vec3(this.x, this.y, this.z)
  }

  addVec(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    return this
  }

  addNum(n) {
    this.x += n
    this.y += n
    this.z += n
    return this
  }

  subtractVec(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    return this
  }

  subtractNum(n) {
    this.x -= n
    this.y -= n
    this.z -= n
    return this
  }

  scaleVec(v) {
    this.x *= v.x
    this.y *= v.y
    this.z *= v.z
    return this
  }

  scaleNum(n) {
    this.x *= n
    this.y *= n
    this.z *= n
    return this
  }

  divideVec(v) {
    this.x /= v.x
    this.y /= v.y
    this.z /= v.z
    return this
  }

  divideNum(n) {
    this.x /= n
    this.y /= n
    this.z /= n
    return this
  }

  normalize() {
    const magnitude = this.length()
    if (magnitude !== 0) {
      this.x /= magnitude
      this.y /= magnitude
      this.z /= magnitude
    }
    return this
  }

  lerp(v, t) {
    this.x += (v.x - this.x) * t
    this.y += (v.y - this.y) * t
    this.z += (v.z - this.z) * t
    return this
  }

  cross(v) {
    this.x = (this.y * v.z) - (this.z * v.y)
    this.y = (this.z * v.x) - (this.x * v.z)
    this.z = (this.x * v.y) - (this.y * v.x)
    return this
  }

  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }

  length() {
    return Math.sqrt(this.dot(this))
  }

  distance(v) {
    return this.copy().subtractVec(v).length()
  }
}
