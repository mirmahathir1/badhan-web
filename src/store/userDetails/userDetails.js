import {handlePATCHDonors} from '../../api';

const state = {
    detailsLoaderFlag: false,
};

const getters = {
    getDetailsLoaderFlag: state => {
        return state.detailsLoaderFlag;
    },
};
const mutations = {
    detailsLoaderFlagOn(state) {
        state.detailsLoaderFlag = true;
    },
    detailsLoaderFlagOff(state) {
        state.detailsLoaderFlag = false;
    },
};
const actions = {
    async saveUserDetails({commit, getters, rootState, rootGetters, dispatch}, payload) {
        commit('detailsLoaderFlagOn');
        let response = await handlePATCHDonors(payload);
        commit('detailsLoaderFlagOff');
        if (response.status !== 200) return;
        dispatch('notification/notifySuccess', "Successfully saved details", {root: true})
        commit("setPhone", parseInt(payload.newPhone), {root: true});
    }
};
export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,

}
