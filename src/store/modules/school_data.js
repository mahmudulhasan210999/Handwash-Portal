// import axios from 'axios';
// import FAPI from '../../../api-path/api-path';

const state = {
    // items: [],

    items: [
        {
            id: 1,
            name: "laskdj"
        }
    ]
}

const getters = {}

const mutations = {
    // SET_ITEMS_COUNT (state, items) {
    //     state.items = items
    // },
}
const actions = {
    // get_Items_Count ({ commit }) {
    //     axios.get(FAPI.get_item_count).then(result => {
    //         let items = result.data
    //         // console.log(items)
    //         commit('SET_ITEMS_COUNT', items)
    //     })
    // },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}