// import axios from 'axios';
// import FAPI from '../../../api-path/api-path';

const state = {
    // items: [],

    total_student: {
        male_count: 655,
        female_count: 666,
    },

    daily_student: {
        male_count: 644,
        female_count: 653,
    },

    wash: {
        male_percentage: 34,
        female_percentage: 66,
    },

    table_data: [
        {
            id: 1,
            group: 23,
            gender: "Male",
            wash_condition: "Improved",
            wash_habit: "Improved",
            percentage: 23
        },
        {
            id: 2,
            group: 12,
            gender: "Male",
            wash_condition: "Satisfactory",
            wash_habit: "Satisfactory",
            percentage: 7
        },
        {
            id: 3,
            group: 42,
            gender: "Female",
            wash_condition: "Need Attention",
            wash_habit: "Need Attention",
            percentage: 22
        },
        {
            id: 4,
            group: 54,
            gender: "Male",
            wash_condition: "Satisfactory",
            wash_habit: "Satisfactory",
            percentage: 8
        },
        {
            id: 5,
            group: 33,
            gender: "Male",
            wash_condition: "Need Attention",
            wash_habit: "Need Attention",
            percentage: 23
        },
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