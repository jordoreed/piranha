function box2(x, y, w, h) {
  this.apply(x, y, w, h);
}

box2.createBoxFromMin = function (minX, minY, w, h) {
  return new box2(minX + (w / 2), minY + (h / 2), w, h);
};

box2.prototype.apply = function (x, y, w, h) {
  this.width = w;
  this.height = h;
  this.halfWidth = w / 2;
  this.halfHeight = h / 2;
  if (this.pos) {
    this.pos.x = x;
    this.pos.y = y;
  }
  else {
    this.pos = new vec2(x, y);
  }
  this.min = this.min || new vec2();
  this.max = this.max || new vec2();
  this.prevPos = this.prevPos || new vec2();
  this.prevMin = this.prevMin || new vec2();
  this.prevMax = this.prevMax || new vec2();
  this.updateMinMax();
  this.resetPrev();
};

box2.prototype.applyMin = function (minX, minY, w, h) {
  this.apply(minX + (w / 2), minY + (h / 2), w, h);
};

box2.prototype.updateMinMax = function () {
  this.min.x = this.pos.x - this.halfWidth;
  this.min.y = this.pos.y - this.halfHeight;
  this.max.x = this.pos.x + this.halfWidth;
  this.max.y = this.pos.y + this.halfHeight;
};

box2.prototype.resetPrev = function () {
  this.resetPrevX();
  this.resetPrevY();
};

box2.prototype.resetPrevX = function () {
  this.prevPos.x = this.pos.x;
  this.prevMin.x = this.min.x;
  this.prevMax.x = this.max.x;
};

box2.prototype.resetPrevY = function () {
  this.prevPos.y = this.pos.y;
  this.prevMin.y = this.min.y;
  this.prevMax.y = this.max.y;
};

box2.prototype.move = function (dir, dist) {
  const m = dir.scaleN(dist);
  this.pos.addEquals(m);
  this.min.addEquals(m);
  this.max.addEquals(m);
  this.resetPrev();
};

box2.prototype.moveX = function (dist) {
  this.pos.x += dist;
  this.min.x += dist;
  this.max.x += dist;
  this.resetPrevX();
};

box2.prototype.moveY = function (dist) {
  this.pos.y += dist;
  this.min.y += dist;
  this.max.y += dist;
  this.resetPrevY();
};

box2.prototype.moveTo = function (point) {
  const m = point.subtract(pos);
  move(m, 1);
};

box2.prototype.intersects = function (b) {
  return (this.max.x > b.min.x && this.min.x < b.max.x &&
    this.max.y > b.min.y && this.min.y < b.max.y);
};

box2.prototype.calcMtv = function (b, mtv) {
  const l = this.min.x - b.max.x;
  const r = this.max.x - b.min.x;
  const d = this.min.y - b.max.y;
  const u = this.max.y - b.min.y;
  mtv.x = Math.abs(l) < Math.abs(r) ? l : r;
  mtv.y = Math.abs(d) < Math.abs(u) ? d : u;
};

box2.prototype.contains = function (b) {
  return (b.min.x >= this.min.x && b.max.x <= this.max.x &&
    b.min.y >= this.min.y && b.max.y <= this.max.y);
};

box2.prototype.intersectsV = function (p) {
  return (this.max.x >= p.x && this.min.x <= p.x &&
    this.max.y >= p.y && this.min.y <= p.y);
};

box2.prototype.calcMtvV = function (p, mtv) {
  const l = this.min.x - p.x;
  const r = this.max.x - p.x;
  const d = this.min.y - p.y;
  const u = this.max.y - p.y;
  mtv.x = Math.abs(l) < Math.abs(r) ? l : r;
  mtv.y = Math.abs(d) < Math.abs(u) ? d : u;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { box2 };
}
