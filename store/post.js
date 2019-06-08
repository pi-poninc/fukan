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
  },

  fetch({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      try {
        const postRef = await firestore.collection('posts').doc(id)
        const postData = await postRef.get()
        resolve(postData.data())
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.all = posts
  }
}
