import { combineReducers } from 'redux';
import VyberPrikladuReducer from './vyberPrikladu';
import PrikladyReducer from './priklady';
import UserSessionReducer from './userSession';

const rootReducer = combineReducers({
  vyberPrikladu: VyberPrikladuReducer,
  priklady: PrikladyReducer,
  userSession: UserSessionReducer
});

export default rootReducer;