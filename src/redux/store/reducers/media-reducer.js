import { mediaAPI } from "../../../API"


const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_MEDIA_VIDEOS = 'SET_MEDIA_VIDEOS'

let initialState = {
    isLoading: false,
    videos: []
}

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_MEDIA_VIDEOS:
            return {
                ...state,
                videos: action.videos
            }
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setMediaViedeos = (videos) => ({ type: SET_MEDIA_VIDEOS, videos })

export const getMediaVideos = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    mediaAPI.getMediaVideos()
        .then(async (response) => {
            dispatch(toggleIsLoading(false))
            dispatch(setMediaViedeos(response))
        })
        .catch(err => {
            dispatch(toggleIsLoading(false))
            console.log(err)
        })
}

export default mediaReducer