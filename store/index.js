import { createStore } from 'redux';
import planReducer from './reducers/plan';
import jsonData from './workoutData.json';

const initialState = JSON.parse(JSON.stringify(jsonData));

const store = createStore(planReducer);

export default store;