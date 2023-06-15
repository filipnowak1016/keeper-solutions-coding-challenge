import { createStore } from 'vuex'
import { find, findIndex, reject } from 'lodash'
import userRoles from './user_roles.json'

export const store = createStore({
  state () {
    return {
      userRoles
    }
  },
  getters: {
    getRole: (state) => (id) => {
      return find(state.userRoles, { id })
    },
    getAllRoles: (state) => state.userRoles
  },
  mutations: {
    addRole(state, role) {
      state.userRoles.push(role)
    },
    updateRole(state, role) {
      const i = findIndex(state.userRoles, { id: role.id })
      state.userRoles[i] = role;
    },
    removeRole(state, id) {
      state.userRoles = reject(state.userRoles, { id })
    }
  },
})
