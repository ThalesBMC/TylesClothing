const INITIAL_START = {
    hidden:false,
  };
  const successReducer = (state = INITIAL_START, action) => {
    switch (action.type) {
      case "SUCCESS_PAYMENT":
        return {
          ...state,
          hidden: action.payload,
        };
        default:
            return state;
        }
      };
export default successReducer;