import axios from 'axios'

export const state = {
  cached: [ ],
}
    // {
    // id:1,
    // first_name:'jony',
    // last_name: 'angelis',
    // email:'kapakp1@wow.ilil',
    // avatar:'salimehapanim.jpg'
    // },
    // {
    // id:2,
    // first_name:'rony',
    // last_name: 'agel',
    // email:'ka1@wow.ilil',
    // avatar:'smepanim.jpg'
    // },

export const getters = {
  allData: state => state.cached
}

export const mutations = {

  CACHE_DATA(state, data) {
    state.cached.push(data)
  },
}

export const actions = {

 async fetchTableData({commit}) {
   if (state.cached.length){
     return state.cached
    }
    // Fetch the Table Data from the API and cache it in case
    //    we need it again in the future.
    const response = await axios.get(`https://reqres.in/api/users?page=2`)
    const data = response.data
    // console.log(data)
    commit('CACHE_DATA', data)
    return response.data;
  }
}
