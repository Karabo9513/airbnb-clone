// reducers/userReducer.js
const initialState = {
    loading: false,
    userInfo: null,
    error: null,
  };
  
  export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return { ...state, loading: true };
      case 'USER_LOGIN_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_LOGIN_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  