/* eslint-disable */ 
// @ts-nocheck
/* eslint-disable */
import { handleGETFrontendSettings } from '../api'
import ldb from '../localDatabase'
import {environmentService} from "@/mixins/environment";

const state = {
  settings: {
    version: '4.5.1',
    backendBaseURL: environmentService.getAPIBaseURL(),
    backendTestBaseURL: environmentService.getAPIBaseURL(),
    defaultExists: true
  }
}
const getters = {
  getSettings (state) {
    if (state.settings.defaultExists) {
      const cachedSettings = ldb.frontendSettings.load()
      if (cachedSettings.status !== 'ERROR') {
        state.settings = cachedSettings.data
      }
    }
    return state.settings
  }
}
const mutations = {
  setSettings (state, settings) {
    state.settings = settings
    ldb.frontendSettings.save(settings)
  }
}
const actions = {
  async fetchSettings ({ commit, dispatch, getters }) {
    const response = await handleGETFrontendSettings()
    if (response.status !== 200) return
    commit('setSettings', response.data)
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true

}
