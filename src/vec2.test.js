import assert from 'assert'

import vec2 from './vec2'

describe('vec2', () => {
  describe('constructor', () => {
    it('should initialize the vector with default zeros', () => {
      const vec = new vec2()

      assert.strictEqual(vec.x, 0)
      assert.strictEqual(vec.y, 0)
    })

    it('should initialize the vector', () => {
      const vec = new vec2(1, 2)

      assert.strictEqual(vec.x, 1)
      assert.strictEqual(vec.y, 2)
    })
  })

  describe('set', () => {
    it('should set the vector with default zeros', () => {
      const vec = new vec2(1, 2)

      vec.set()

      assert.strictEqual(vec.x, 0)
      assert.strictEqual(vec.y, 0)
    })

    it('should set the vector', () => {
      const vec = new vec2(1, 2)

      vec.set(3, 4)

      assert.strictEqual(vec.x, 3)
      assert.strictEqual(vec.y, 4)
    })
  })

  describe('toString', () => {
    it('should print a string representation of the vector', () => {
      const vec = new vec2(1, 2)

      assert.strictEqual(vec.toString(), '(1, 2)')
    })
  })

  describe('copy', () => {
    it('should create a duplicate vector', () => {
      const vec = new vec2(1, 2)

      const dup = vec.copy()

      assert.deepStrictEqual(dup, vec)
      assert.notStrictEqual(dup, vec)
    })
  })

  describe('addVec', () => {
    it('should add a vector', () => {
      const vec = new vec2(1, 2)

      vec.addVec(new vec2(-0.1, 1))

      assert.strictEqual(vec.x, 0.9)
      assert.strictEqual(vec.y, 3)
    })
  })

  describe('addNum', () => {
    it('should add a number', () => {
      const vec = new vec2(1, 2)

      vec.addNum(1)

      assert.strictEqual(vec.x, 2)
      assert.strictEqual(vec.y, 3)
    })
  })

  describe('subtractVec', () => {
    it('should subtract a vector', () => {
      const vec = new vec2(1, 2)

      vec.subtractVec(new vec2(-0.1, 1))

      assert.strictEqual(vec.x, 1.1)
      assert.strictEqual(vec.y, 1)
    })
  })

  describe('subtractNum', () => {
    it('should subtract a number', () => {
      const vec = new vec2(1, 2)

      vec.subtractNum(1)

      assert.strictEqual(vec.x, 0)
      assert.strictEqual(vec.y, 1)
    })
  })

  describe('scaleVec', () => {
    it('should scale with a vector', () => {
      const vec = new vec2(1, 2)

      vec.scaleVec(new vec2(3, 2))

      assert.strictEqual(vec.x, 3)
      assert.strictEqual(vec.y, 4)
    })
  })

  describe('scaleNum', () => {
    it('should scale with a number', () => {
      const vec = new vec2(1, 2)

      vec.scaleNum(2)

      assert.strictEqual(vec.x, 2)
      assert.strictEqual(vec.y, 4)
    })
  })

  describe('divideVec', () => {
    it('should divide with a vector', () => {
      const vec = new vec2(1, 2)

      vec.divideVec(new vec2(2, 4))

      assert.strictEqual(vec.x, 0.5)
      assert.strictEqual(vec.y, 0.5)
    })
  })

  describe('divideNum', () => {
    it('should divide with a number', () => {
      const vec = new vec2(1, 2)

      vec.divideNum(2)

      assert.strictEqual(vec.x, 0.5)
      assert.strictEqual(vec.y, 1)
    })
  })

  describe('normalize', () => {
    it('should normalize the vector', () => {
      const vec = new vec2(77777, 0)

      vec.normalize()

      assert.strictEqual(vec.x, 1)
      assert.strictEqual(vec.y, 0)
    })
  })

  describe('rotate', () => {
    it('should rotate a vector about a point', () => {
      const vec = new vec2(1, 0)

      vec.rotate(90, 0, 0)

      assert.strictEqual(vec.x.toFixed(3), '0.000')
      assert.strictEqual(vec.y.toFixed(3), '1.000')
    })
  })

  describe('length', () => {
    it('should return the length of the vector', () => {
      const vec = new vec2(22, 0)

      assert.strictEqual(vec.length(), 22)
    })
  })

  describe('distance', () => {
    it('should return the distance between two vectors', () => {
      const v1 = new vec2(0, 1)
      const v2 = new vec2(0, -10)

      assert.strictEqual(v1.distance(v2), 11)
    })
  })
})
