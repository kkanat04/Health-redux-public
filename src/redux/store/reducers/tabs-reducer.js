const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_CURRENT_TAB = 'SET_CURRENT_TAB'



let initialState = {
    isLoading: false,
    tabs: ['MainPage', 'Forum', 'Profile'],
    currentTab: 'MainPage'
}

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.tab
            }
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setCurrentTab = (tab) => ({ type: SET_CURRENT_TAB, tab })

export default tabsReducer