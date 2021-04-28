import {badhanAxios} from '@/api';
const state = {
    passwordLoader: false,
    passwordError: null,
    passwordSuccess: null,
};

const getters = {
    getPasswordLoader: state=>{
        return state.passwordLoader;
    },
    getPasswordError: state=>{
        return state.passwordError;
    },
    getPasswordSuccess: state=>{
        return state.passwordSuccess;
    }
};
const mutations = {
    passwordLoaderOn(state){
        state.passwordLoader = true;
    },
    passwordLoaderOff(state){
        state.passwordLoader = false;
    },
    setPasswordSuccess(state,payload){
        state.passwordSuccess = payload;
    },
    setPasswordError(state,payload){
        state.passwordError = payload;
    },
    clearPasswordMessage(state){
        state.passwordSuccess = null;
        state.passwordError = null;
    }

};
const actions = {
    async savePassword({commit,getters,rootState,rootGetters, dispatch},payload){
        commit('clearPasswordMessage');
        commit('passwordLoaderOn');

        try {
            let response = await badhanAxios.post("v2/donor/password/change", payload);
            dispatch('notification/notifySuccess',"Successfully changed password",{root:true});
        } catch (error) {
        } finally {
            commit('passwordLoaderOff');
        }
    }
};


export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}