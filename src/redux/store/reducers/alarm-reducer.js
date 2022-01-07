import { alarmAPI } from './../../../API/index';
import { Alert } from 'react-native';

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_ALARM_LIST = 'SET_ALARM_LIST'
const SET_CURRENT_ALARM_ID = 'SET_CURRENT_ALARM'
const SET_CURRENT_ALARM_INFO = 'SET_CURRENT_ALARM_INFO'



let initialState = {
    isLoading: false,
    alarmList: [
        {
            id: 1,
            name: 'water',
            day: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
            daily: false,
            active: true,
            created: 'Fri Oct 10 2021',
            updated: 'Fri Oct 20 2021',
            hour: '01:52:08',
            author: 2
        },
        {
            id: 2,
            name: 'Wine',
            day: ['SATURDAY', 'SUNDAY',],
            daily: false,
            active: false,
            created: 'Mon Nov 11 2021',
            updated: 'Fri Dec 30 2021',
            hour: '07:00:08',
            author: 2
        },
        {
            id: 3,
            name: 'Wiskey',
            day: [],
            daily: true,
            active: true,
            created: 'Thu Oct 05 2017',
            updated: 'Fri Dec 30 2021',
            hour: '12:43:00',
            author: 2
        }
    ],
    currentAlarmID: null,
    currentAlarmInfo: {},
}

const alarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_ALARM_LIST:
            return {
                ...state,
                alarmList: action.alarmList
            }
        case SET_CURRENT_ALARM_ID:
            return {
                ...state,
                currentAlarmID: action.id
            }
        case SET_CURRENT_ALARM_INFO:
            return {
                ...state,
                currentAlarmInfo: action.data
            }
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setAlarmList = (alarmList) => ({ type: SET_ALARM_LIST, alarmList })
export const setCurrentAlarmId = (id) => ({ type: SET_CURRENT_ALARM_ID, id })
export const setCurrentAlarmInfo = (data) => ({ type: SET_CURRENT_ALARM_INFO, data })

export const getAlarmList = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    alarmAPI.getAlarmsList()
        .then(response => {
            dispatch(toggleIsLoading(false))
            dispatch(setAlarmList(response))
        })
        .catch(err => {
            dispatch(toggleIsLoading(false))
            console.log(err)
        })
}

export const createAlarm = (data, alarmList, navigation) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    if (data.name !== '') {
        alarmAPI.createAlarm(data)
            .then(response => {
                dispatch(setAlarmList([...alarmList, response]))
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch(toggleIsLoading(false))
                navigation.navigate('Pills')
            })
    } else {
        Alert.alert('Обязательно', 'Заполните поле для описания будильника')
        dispatch(toggleIsLoading(false))
    }
}

export const editAlarm = (id, data, alarmList, type, navigation) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    alarmAPI.editAlarm(id, data, type)
        .then(response => {
            let changedList = alarmList.map(el => {
                if (el.id == id) {
                    return el = response
                } else {
                    return el
                }
            })
            dispatch(setAlarmList(changedList))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
            navigation.navigate('Pills')
        })
}

export const deleteAlarm = (id, alarmList, navigation) => (dispatch) => {
    alarmAPI.deleteAlarm(id)
        .then(response => {
            let changedList = alarmList.filter(el => el.id !== id)
            dispatch(setAlarmList(changedList))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
            navigation.navigate('Pills')
        })
}

export default alarmReducer