import firebase from '@/plugins/firebase'

const firestore = firebase.firestore()

export const state = () => ({
  all: null
})

export const getters = {
  all: state => state.all
}

export const actions = {
  async fetchAll({ commit }) {
    try {
      const posts = []
      const querySnapshot = await firestore.collection('posts').get()

      await querySnapshot.forEach(doc => {
        posts.push(doc.data())
      })

      commit('setPosts', posts)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.all = posts
  }
}
