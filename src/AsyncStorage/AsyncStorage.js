import AsyncStorage from '@react-native-async-storage/async-storage'

export const setToken = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)

        await AsyncStorage.setItem('token', jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        return JSON.parse(token)
    } catch (e) {

    }
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
}

export const setCheckbox = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('checkbox', jsonValue)
    } catch (e) {
    }
}

export const getCheckbox = async () => {
    try {
        const name = await AsyncStorage.getItem('checkbox')
        return JSON.parse(name)
    } catch (e) {

    }

}