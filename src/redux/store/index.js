import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import contactsReducer from './reducers/contacts-reducer';
import forumReducer from './reducers/forum-reducer';
import infoReducer from './reducers/info-reducer';
import mainPageReducer from './reducers/mainPage-reducer';
import testsReducer from './reducers/tests-reducer';
import userReducer from './reducers/user-reducer';
import mediaReducer from './reducers/media-reducer';
import alarmReducer from './reducers/alarm-reducer';
import tabsReducer from './reducers/tabs-reducer';

const reducers = {
    mainPage: mainPageReducer,
    user: userReducer,
    tests: testsReducer,
    contacts: contactsReducer,
    forum: forumReducer,
    info: infoReducer,
    media: mediaReducer,
    alarm: alarmReducer,
    tabs: tabsReducer
};

const rootReducer = combineReducers({
    ...reducers
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store


