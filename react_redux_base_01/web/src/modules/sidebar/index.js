// action --------------------------------------------------------------------------------
export const TOGGLE_EXPANDE = Symbol("TOGGLE_EXPANDE");
// action_creator --------------------------------------------------------------------------------
export const toggleExpande = (input) => ({
  type: TOGGLE_EXPANDE,
  payload: { input },
});
// reducers --------------------------------------------------------------------------------
const initialState = {
  expanded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXPANDE:
      return Object.assign({}, state, {
        expanded: !action.payload.input,  
      });
    default:
      return state;
  }
};
