import * as EffectTypes from "./effectTypes";

const makeEffect = (type, payload) => {
  return { type, payload };
};

export function take(pattern) {
  return makeEffect(EffectTypes.TAKE, { pattern });
}

export function put(action) {
  return makeEffect(EffectTypes.PUT, { action });
}
