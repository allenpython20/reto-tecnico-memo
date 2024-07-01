import userHttpClient from '@/api/user.api';
import { User, UserResponse } from '@/interfaces/user.interface';
import { createStore } from 'vuex'

export default createStore({

  state: {
    users: [] as User[],
    nationalities: [] as string[],
  },
  getters: {
    getUsers: (state) => state.users,
    filteredUsers: (state) => (searchTerm: string) => {
      const searchTermClean = searchTerm.toLowerCase();
      console.log({searchTermClean})
      return state.users.filter(
        (user:User) =>
          user.name.first.toLowerCase().includes(searchTermClean) ||
          user.name.last.toLowerCase().includes(searchTermClean)
      );
    },
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setNationalitiesMutation(state, nationalities: string[]) {
      state.nationalities = nationalities;
    },
  },

  actions: {
    async fetchUsers({ commit,state }) {
      try {
        const nationalityParam = state.nationalities.join(',');
        const {data} = await userHttpClient.get<UserResponse>(`/api/?results=50&nat=${nationalityParam}`);
       
        commit('setUsers',  data.results || []);
      } catch (error) {
        console.error('Error!!:', error);
      }
    },
    setNationalities({ commit, dispatch }, nationalities: string[]) {
      commit('setNationalitiesMutation', nationalities);
      dispatch('fetchUsers');
    },
  },
  
  modules: {
  }
})
