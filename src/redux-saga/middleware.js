import { runSaga } from "./runSaga";
import { stdChannel } from "./channel";
function SagaMiddlewareFactory() {
  let boundRunSaga;
  const channel = stdChannel();
 
  function SagaMiddleware({getState, dispatch}) {
    boundRunSaga = runSaga.bind(null, {
      channel,
      dispatch,
      getState,
    });
    return (next) => (action) => {
      let res = next(action);
      channel.put(action)
      return res;
    };
  }

  SagaMiddleware.run = (...args) => {
    return boundRunSaga(...args)
  }
  return SagaMiddleware;
}

export default SagaMiddlewareFactory;
