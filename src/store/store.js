
// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import thunk middleware from redux-thunk
import { thunk } from 'redux-thunk';
// Import combineReducers from redux
import { combineReducers } from 'redux';

// Example reducer (replace with your actual reducers)
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    // Handle actions here
    default:
      return state;
  }
};

// Combine your reducers into a single root reducer
const rootReducer = combineReducers({
  example: exampleReducer,
});

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // The root reducer that manages the entire state of the application
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add thunk middleware to the default middleware
});

// Export the created store
export default store;

