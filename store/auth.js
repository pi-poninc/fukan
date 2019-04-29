import firebase from '@/plugins/firebase'

export const state = () => ({
  user: null
})

export const getters = {
  isLogin: state => !!state.user,
  user: state => state.user
}

export const actions = {
  login() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithRedirect(googleProvider)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },

  async logout({ commit }) {
    try {
      await firebase.auth().signOut()
      commit('unsetUser')
      console.log('logout!')
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },

  unsetUser(state) {
    state.user = null
  }
}
