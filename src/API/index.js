import * as axios from "axios"
import { getToken } from "../AsyncStorage/AsyncStorage"

const instance = axios.create({
    baseURL: 'http://62.109.8.101/api/',
    withCredentials: true,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    }
})
export const authAPI = {
    me: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/auth/users/me/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    signUp(userData) {
        return instance.post(`v1/register/`, userData)
    },
    signIn(userData) {
        return instance.post(`v1/auth_token/token/login/`, userData)
    },
    logOut() {
        return instance.post(`v1/auth_token/token/logout/`)
    },
    getResetToken(email) {
        return instance.post(`password_reset/`, email)
    },
    resetPassword: async function (userData) {
        const request = await fetch(`http://62.109.8.101/api/password_reset/confirm/`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        const response = await request.json()
        return response
    },
    changePassword(userData) {
        return instance.put('v1/change-password/', userData)
    },
    getExpoNotification: async function (data, token) {
        const request = await fetch(`http://62.109.8.101/devices`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(data)
        })

        const response = await request.json()
        return response
    }
}

export const testsAPI = {
    getTests: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/quiz', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    getQuestions: async function (testName) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/question/${testName}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    setFinalResult: async function (data) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/result`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
    detailsInfo: async function () {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/more_details`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    }
}

export const contactsAPI = {
    getDesignation: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/list/designation', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    getOurCordinates: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/maps', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },

    getContacts: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/contacts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    sendFeedBack: async function (data) {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/create/feedback', {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
}

export const forumAPI = {
    getForumList: async function (name = '') {
        let token = await getToken()
        const request = await fetch(name ? `http://62.109.8.101/api/v1/list/forum?search=${name}` : 'http://62.109.8.101/api/v1/list/forum', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    getAppealist: async function (name = '') {
        let token = await getToken()
        const request = await fetch(name ? `http://62.109.8.101/api/v1/list/appeal?search=${name}` : 'http://62.109.8.101/api/v1/list/appeal', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    getComments: async function () {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/list/comment', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    createTopic: async function (data) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/create/appeal`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
    createComment: async function (comment, appeal, author) {
        let token = await getToken()
        const request = await fetch('http://62.109.8.101/api/v1/comment/', {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify({
                appeal,
                author,
                comment
            })
        })
        const response = await request.json()
        return response
    },
    replyComment: async function (comment, appeal, author, parent) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/comment/${parent}/reply/`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify({
                appeal,
                author,
                comment,
                parent
            })
        })
        const response = await request.json()
        return response
    },
    deleteComment: async function (id) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/update/delete/comment/${id}`, {
            method: 'DELETE',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    editComment: async function (id, data) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/update/delete/comment/${id}`, {
            method: 'PUT',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
    deleteAppeal: async function (id) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/update/delete/appeal/${id}`, {
            method: 'DELETE',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    editAppeal: async function (id, data) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/update/delete/appeal/${id}`, {
            method: 'PUT',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
}

export const infoAPI = {
    allInfo: async function () {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/list/all_information`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
}

export const mediaAPI = {
    getMediaVideos: async function () {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/list/media/data`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
}

export const alarmAPI = {
    getAlarmsList: async function () {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/list/alarms/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    getCurrentAlarm: async function (id) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/alarms/${id}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
    createAlarm: async function (data) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/alarms/`, {
            method: 'POST',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
    editAlarm: async function (id, data, type) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/detail/alarms/${id}/`, {
            method: type === 'PUT' ? 'PUT' : 'PATCH',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        const response = await request.json()
        return response
    },
    deleteAlarm: async function (id) {
        let token = await getToken()
        const request = await fetch(`http://62.109.8.101/api/v1/detail/alarms/${id}/`, {
            method: 'DELETE',
            withCredentials: true,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const response = await request.json()
        return response
    },
}
