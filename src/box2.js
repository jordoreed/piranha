import vec2 from './vec2'

export default class box2 {
  constructor(x, y, w, h) {
    this.set(x, y, w, h)
  }

  set(x, y, w, h) {
    this.width = w
    this.height = h
    this.halfWidth = w / 2
    this.halfHeight = h / 2
    if (this.pos) {
      this.pos.x = x
      this.pos.y = y
    } else {
      this.pos = new vec2(x, y)
    }
    this.min = this.min || new vec2()
    this.max = this.max || new vec2()
    this.prevPos = this.prevPos || new vec2()
    this.prevMin = this.prevMin || new vec2()
    this.prevMax = this.prevMax || new vec2()
    this.updateMinMax()
    this.resetPrev()
  }

  setMin(minX, minY, w, h) {
    this.set(minX + (w / 2), minY + (h / 2), w, h)
  }

  updateMinMax() {
    this.min.x = this.pos.x - this.halfWidth
    this.min.y = this.pos.y - this.halfHeight
    this.max.x = this.pos.x + this.halfWidth
    this.max.y = this.pos.y + this.halfHeight
  }

  resetPrev() {
    this.resetPrevX()
    this.resetPrevY()
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

  move(dir, dist) {
    const m = dir.scaleNum(dist)
    this.pos.addVec(m)
    this.min.addVec(m)
    this.max.addVec(m)
    this.resetPrev()
  }

  moveX(dist) {
    this.pos.x += dist
    this.min.x += dist
    this.max.x += dist
    this.resetPrevX()
  }

  moveY(dist) {
    this.pos.y += dist
    this.min.y += dist
    this.max.y += dist
    this.resetPrevY()
  }

  moveTo(v) {
    move(v.subtractVec(this.pos), 1)
  }

  intersectsBox(b) {
    return (
      this.max.x > b.min.x && this.min.x < b.max.x &&
      this.max.y > b.min.y && this.min.y < b.max.y
    )
  }

  intersectsVec(v) {
    return (
      this.max.x >= v.x && this.min.x <= v.x &&
      this.max.y >= v.y && this.min.y <= v.y
    )
  }

  calcMtvBox(box, mtv) {
    const l = this.min.x - box.max.x
    const r = this.max.x - box.min.x
    const b = this.min.y - box.max.y
    const t = this.max.y - box.min.y
    mtv.x = Math.abs(l) < Math.abs(r) ? l : r
    mtv.y = Math.abs(b) < Math.abs(t) ? b : t
  }

  calcMtvVec(vec, mtv) {
    const l = this.min.x - vec.x
    const r = this.max.x - vec.x
    const b = this.min.y - vec.y
    const t = this.max.y - vec.y
    mtv.x = Math.abs(l) < Math.abs(r) ? l : r
    mtv.y = Math.abs(b) < Math.abs(t) ? b : t
  }

  containsBox(box) {
    return (
      box.min.x >= this.min.x && box.max.x <= this.max.x &&
      box.min.y >= this.min.y && box.max.y <= this.max.y
    )
  }

  containsVec(vec) {
    return (
      this.min.x < vec.x && vec.x < this.max.x &&
      this.min.y < vec.y && vec.y < this.max.y
    )
  }
}

box2.fromMin = (minX, minY, w, h) => {
  return new box2(minX + (w / 2), minY + (h / 2), w, h)
}
