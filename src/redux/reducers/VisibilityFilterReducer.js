const initialState = "View_All";

const VisibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VisibilityFilter/Filter":
      return action.payload;
    default:
      return state;
  }
};

export default VisibilityFilterReducer;
