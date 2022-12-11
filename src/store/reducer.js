/**
 * This is a reducer function which takes state and.action and returns the updated state
 * @typedef {function}  reducer
 * @typedef {Object} action
 * @property {string} type - "The type of action"
 * @property {string|number|Object|Array|boolean} payload - the value you want to provide
 * @typedef {Object} state
 * @property {string|number|Object|Array|boolean} state - this is your app state
 * @param {state} state
 * @param {action} action
 * @returns {state} returns state
 */

export const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CLICKED":
      return { ...state, inputClicked: true };
    case "INPUT_CLOSE":
      return { ...state, inputClicked: false };
    case "ACCESS_DATA":
      return {
        ...state,
        accessData: {
          ...state.accessData,
          [action.payload.user]: action.payload.access,
        },
      };
    case "REMOVE_ACCESS_DATA":
      return {
        ...state,
        accessData: {
          ...state.accessData,
          [action.payload.user]: "No access",
        },
      };
    case "MEMBERS":
      return {
        ...state,
        members: {
          ...state.members,
          [action.payload.id]: action.payload.info,
        },
      };
    default:
      return state;
  }
};

/**
 * This isyour initial State
 * @typedef {Object}  InitialState
 * @property {string|number|Object|Array|boolean} state Object - This is your initial state
 */

export const initialState = {
  inputClicked: false,
  accessData: {},
  members: {},
};
