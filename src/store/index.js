import { createStore } from 'vuex'
import portal from './modules/portal'
import school_data from './modules/school_data'
import overview from './modules/overview'

export default createStore({
    modules: {
        portal,
        school_data,
        overview
    },

    state () {
        return {}
    },
    
    getters: {},
    mutaions: {},
    actions: {}
})