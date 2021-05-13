import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigator/navigator';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './Store/reducer/reducer';
const rootReducer = combineReducers({
  reducer: reducer,
});

const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
