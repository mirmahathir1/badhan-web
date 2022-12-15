// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
// import gradleString from '../../android/app/build.gradle'

// import g2js from 'gradle-to-js/lib/parser'

// custom android support
export const getLocalAppVersion = async () => {
  // const representation = await g2js.parseText(gradleString)
  // return representation.android.defaultConfig.versionName
  return '4.10.1'
}

// custom android support
export const getIsNative = () => {
  return window.origin.includes('localhost') && window.origin.split(':').length !== 3
}

const getMethodNames = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')

export const getAndroidInfo = async () => {
  // const representation = await g2js.parseText(gradleString)
  return {
    windowOrigin: window.origin,
    versionInGradle: getLocalAppVersion(),
    navigatorAppExitApp: navigator.app ? getMethodNames(navigator.app) : 'navigator.app undefined'
  }
}

// custom android support
export const exitApp = () => {
  navigator.app.exitApp()
}