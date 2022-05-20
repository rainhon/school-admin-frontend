import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'

const store =new Vuex.Store({
    state,
    mutations
})
export default store;