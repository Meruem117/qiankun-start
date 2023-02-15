import CryptoJS from 'crypto-js'
import {
    SM4
} from 'gm-crypto'

// AES
export const encrypt = (str, keyStr) => {
    let key = CryptoJS.enc.Utf8.parse(keyStr)
    let srcs = CryptoJS.enc.Utf8.parse(str)
    const encrypt = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypt.toString()
}
export const decrypt = (str, keyStr) => {
    let key = CryptoJS.enc.Utf8.parse(keyStr)
    let decrypt = CryptoJS.AES.decrypt(str, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

// SM4
export const SM4Encrypt = (str, key) => {
    const encrypt = SM4.encrypt(str, stringToHex(key), {
        inputEncoding: 'utf8',
        outputEncoding: 'base64'
    })
    return encrypt
}
export const SM4Decrypt = (str, key) => {
    const decrypt = SM4.decrypt(str, stringToHex(key), {
        inputEncoding: 'base64',
        outputEncoding: 'utf8'
    })
    return decrypt
}
export const stringToHex = (str) => {
    let val = ''
    for (let i = 0; i < str.length; i++) {
        val += str.charCodeAt(i).toString(16)
    }
    return val
}

// File
export const fileEncrypt = (content, pwd) => {
    let key = CryptoJS.enc.Utf8.parse(pwd)
    let srcs = CryptoJS.enc.Utf8.parse(content)
    const encrypt = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypt
}
export const fileDecrypt = (content, pwd) => {
    let key = CryptoJS.enc.Utf8.parse(pwd)
    const decrypt = CryptoJS.AES.decrypt(content, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypt.toString(CryptoJS.enc.Utf8)
}