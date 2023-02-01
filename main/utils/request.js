import axios from 'axios'

const baseUrl = 'http://localhost:8080'

export default {
    get: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + url, {
                    params: params,
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    post: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    put: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.put(baseUrl + url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    delete: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.delete(baseUrl + url, {
                    params: params
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}