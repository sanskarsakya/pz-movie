
export function baseReducer(reducerFunction, reducerName) {
    return (state, action) => {
      const { name } = action;
      console.log(action);
      const isInitializationCall = state === undefined;
      if (name !== reducerName && !isInitializationCall) return state;
  
      return reducerFunction(state, action);
    };
  }
  