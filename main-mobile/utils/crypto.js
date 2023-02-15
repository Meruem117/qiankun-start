import CryptoJS from 'crypto-js'
import {
    SM4
} from 'gm-crypto'

export const fileEncrypt = (content, pwd) => {
    let key = CryptoJS.enc.Utf8.parse(pwd);
    let srcs = CryptoJS.enc.Utf8.parse(content);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted
}
export const fileDecrypt = (content, pwd) => {
    let key = CryptoJS.enc.Utf8.parse(pwd);
    const decrypted = CryptoJS.AES.decrypt(content, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return decrypted
}
export const encrypt = (word, keyStr) => {
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
}
export const decrypt = (word, keyStr) => {
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let decrypt = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}


export const stringToHex = (str) => {
    let val = ''
    for (let i = 0; i < str.length; i++) {
        val += str.charCodeAt(i).toString(16)
    }
    return val
}
export const SM4Encrypt = (message, key) => {
    const SM4encrypted = SM4.encrypt(message, stringToHex(key), {
        inputEncoding: 'utf8',
        outputEncoding: 'base64'
    })
    return SM4encrypted
}
export const SM4Decrypt = (message, key) => {
    const SM4decrypted = SM4.decrypt(message, stringToHex(key), {
        inputEncoding: 'base64',
        outputEncoding: 'utf8'
    })
    return SM4decrypted
}