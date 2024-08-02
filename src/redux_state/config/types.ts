// types.ts
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import rootReducer from 'redux_state/reducers/reducers';

// Define the shape of your root state
export type RootState = ReturnType<typeof rootReducer>;

// Define the shape of your thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;