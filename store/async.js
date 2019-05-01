export const state = () => ({
  isLoading: false
})

export const getters = {
  isLoading: state => state.isLoading
}

export const mutations = {
  asyncActionStarted() {
    state.isLoading = true
  },

  asyncActionFinished() {
    state.isLoading = false
  },

  asyncActionFailed() {
    state.isLoading = false
  }
}
