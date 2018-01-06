import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
            firstname: 'Edegar',
            lastname: 'Junior',
            yourRank: 1,
            photo: '/static/user-default.png',
            money: 10000,
            check: 500,
            like: 54
        }
    },

    getters: {
        firstname: state => state.user.firstname,
        lastname: state => state.user.lastname,
        yourRank: state => state.user.yourRank,
        photo: state => state.user.photo,
        money: state => state.user.money,
        check: state => state.user.check,
        like: state => state.user.like
    },

    mutations: {
        invertName: (state) => {
            let lastname = state.user.lastname
            state.user.lastname = state.user.firstname
            state.user.firstname = lastname
        }
    }

})