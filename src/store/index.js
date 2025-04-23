import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
        myData:undefined,
        endImport:false
      }
    },
    mutations: {
        initializeData (state,data) {
            state.myData = data
        },
        endImport(state,value){
            state.endImport = value
        }
    }
})