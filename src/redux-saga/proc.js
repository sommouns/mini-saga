import effectRunnerMap from "./effectRunnerMap"

export default function proc(env, iterator) {
  function next() {
    let result = iterator.next()
    if (!result.done) {
      runEffect(result.value, next)
    }
  }

  function runEffect(effect, next) {
    if (effect) {
      const effectRunner = effectRunnerMap[effect.type]
      effectRunner(env, effect.payload, next, {runEffect})
    } else {
      next()
    }
  }

  next()
}