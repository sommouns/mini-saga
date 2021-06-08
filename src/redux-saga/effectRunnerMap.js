import * as EffectTypes from './effectTypes'

function runTakeEffect(env, payload,next) {
  const matcher = action => action.type === payload.pattern
  env.channel.take(next, matcher)
}

function runPutEffect(env, payload,next) {
  env.dispatch(payload.action)
  next()
}
const effectRunnerMap = {
  [EffectTypes.PUT]: runPutEffect,
  [EffectTypes.TAKE]: runTakeEffect
}

export default effectRunnerMap
