export default {
  randomInt: (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  },

  randomFloat: (min, max) => {
    return (Math.random() * (max - min)) + min
  },

  toRadians: (degrees) => {
    return degrees * Math.PI / 180.0
  },

  toDegrees: (radians) => {
    return radians * 180.0 / Math.PI
  },

  clamp: (num, min, max) => {
    return (num < min ? min : (num > max ? max : num))
  },

  lerp: (a, b, t) => {
    return a + ((b - a) * t)
  },

  cosInterpolation: (a, b, t) => {
    const t2 = (1 - Math.cos(t * Math.PI)) / 2
    return (a * (1 - t2)) + (b * t2)
  }
}
