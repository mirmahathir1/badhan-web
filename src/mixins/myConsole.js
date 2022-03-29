import { store } from '../store/store'

export const myConsole = (function () {
  return {
    log: function () {
      const args = Array.prototype.slice.call(arguments)
      console.log.apply(console, args)
      store.commit('consoleStore/addConsoleLog', {
        text: args,
        time: new Date().getTime()
      })
    },
    warn: function () {
      const args = Array.prototype.slice.call(arguments)
      console.warn.apply(console, args)
    },
    error: function () {
      const args = Array.prototype.slice.call(arguments)
      console.error.apply(console, args)
    }
  }
}())