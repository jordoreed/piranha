import vec3 from './vec3'

export default class box3 {
  constructor(x, y, z, w, h, d) {
    this.set(x, y, z, w, h, d)
  }

  set(x, y, z, w, h, d) {
    this.width = w
    this.height = h
    this.depth = d
    this.halfWidth = w / 2
    this.halfHeight = h / 2
    this.halfDepth = d / 2
    if (this.pos) {
      this.pos.x = x
      this.pos.y = y
      this.pos.z = z
    } else {
      this.pos = new vec3(x, y, z)
    }
    this.min = this.min || new vec3()
    this.max = this.max || new vec3()
    this.prevPos = this.prevPos || new vec3()
    this.prevMin = this.prevMin || new vec3()
    this.prevMax = this.prevMax || new vec3()
    this.updateMinMax()
    this.resetPrev()
  }

  setMin(minX, minY, minZ, w, h, d) {
    this.set(
      minX + (w / 2),
      minY + (h / 2),
      minZ + (d / 2),
      w,
      h,
      d,
    )
  }

  updateMinMax() {
    this.min.x = this.pos.x - this.halfWidth
    this.min.y = this.pos.y - this.halfHeight
    this.min.z = this.pos.z - this.halfDepth
    this.max.x = this.pos.x + this.halfWidth
    this.max.y = this.pos.y + this.halfHeight
    this.max.z = this.pos.z + this.halfDepth
  }

  resetPrev() {
    this.resetPrevX()
    this.resetPrevY()
    this.resetPrevZ()
  }

  resetPrevX() {
    this.prevPos.x = this.pos.x
    this.prevMin.x = this.min.x
    this.prevMax.x = this.max.x
  }

  resetPrevY() {
    this.prevPos.y = this.pos.y
    this.prevMin.y = this.min.y
    this.prevMax.y = this.max.y
  }

  resetPrevZ() {
    this.prevPos.z = this.pos.z
    this.prevMin.z = this.min.z
    this.prevMax.z = this.max.z
  }

  move(dir, distance) {
    const m = dir.scaleNum(distance)
    this.pos.addVec(m)
    this.min.addVec(m)
    this.max.addVec(m)
    this.resetPrev()
  }

  moveX(distance) {
    this.pos.x += distance
    this.min.x += distance
    this.max.x += distance
    this.resetPrevX()
  }

  moveY(distance) {
    this.pos.y += distance
    this.min.y += distance
    this.max.y += distance
    this.resetPrevY()
  }

  moveZ(distance) {
    this.pos.z += distance
    this.min.z += distance
    this.max.z += distance
    this.resetPrevZ()
  }

  moveTo(v) {
    this.move(v.subtractVec(this.pos), 1)
  }

  intersectsBox(b) {
    return (
      this.max.x > b.min.x && this.min.x < b.max.x &&
      this.max.y > b.min.y && this.min.y < b.max.y &&
      this.max.z > b.min.z && this.min.z < b.max.z
    )
  }

  intersectsVec(v) {
    return (
      this.max.x >= v.x && this.min.x <= v.x &&
      this.max.y >= v.y && this.min.y <= v.y &&
      this.max.z >= v.z && this.min.z <= v.z
    )
  }

  calcMtvBox(box, mtv) {
    const l = this.min.x - box.max.x
    const r = this.max.x - box.min.x
    const b = this.min.y - box.max.y
    const t = this.max.y - box.min.y
    const n = this.min.z - box.max.z
    const f = this.max.z - box.min.z
    mtv.x = Math.abs(l) < Math.abs(r) ? l : r
    mtv.y = Math.abs(b) < Math.abs(t) ? b : t
    mtv.y = Math.abs(n) < Math.abs(f) ? n : f
  }

  calcMtvVec(vec, mtv) {
    const l = this.min.x - vec.x
    const r = this.max.x - vec.x
    const b = this.min.y - vec.y
    const t = this.max.y - vec.y
    mtv.x = Math.abs(l) < Math.abs(r) ? l : r
    mtv.y = Math.abs(b) < Math.abs(t) ? b : t
    mtv.z = Math.abs(n) < Math.abs(f) ? n : f
  }

  containsBox(b) {
    return (
      b.min.x >= this.min.x && b.max.x <= this.max.x &&
      b.min.y >= this.min.y && b.max.y <= this.max.y &&
      b.min.z >= this.min.z && b.max.z <= this.max.z
    )
  }
}

box3.fromMin = (minX, minY, minZ, w, h, d) => {
  return new box3(
    minX + (w / 2),
    minY + (h / 2),
    minZ + (d / 2),
    w,
    h,
    d,
  )
}
