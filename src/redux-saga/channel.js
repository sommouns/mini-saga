export function stdChannel() {
  let takeArr = [];
  function take(cb, matcher) {
    cb["MATCH"] = matcher;
    cb["cancel"] = () => {
      takeArr = takeArr.filter((item) => item !== cb);
    };
    takeArr.push(cb);
  }
  function put(input) {
    takeArr.forEach((taker) => {
      if (taker["MATCH"](input)) {
        taker.cancel();
        taker(input);
      }
    });
  }

  return { put, take };
}

// UNIT TEST
// const {put, take} = Channel()
// put(function () {
//   console.log('aaaaa')
// }, input => input.type === 'a')
// put(function () {
//   console.log('bbbbb')
// }, input => input.type === 'b')

// take({type: 'a'})
