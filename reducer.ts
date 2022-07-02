const reducer = (state = initialState, { type, payload }: {type:string, payload:any}) => {
  switch (type) {
    case "SET_FALLBACK":
      const newState = {...state};
      newState.fallback = payload
      return newState;

    default:
      return state;
  }
};

export const initialState = {
  fallback: null,
};
export default reducer;
