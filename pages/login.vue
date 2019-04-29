<template lang="pug">
  v-container
    h1 ログイン
    v-btn(color='success' @click='login') Googleアカウントでログイン
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import firebase from '@/plugins/firebase'

export default {
  name: 'Login',
  computed: {
    ...mapGetters('async', ['isLoading'])
  },
  async mounted() {
    const user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => resolve(user))
    })

    if (user) {
      const userInfo = Object.assign(
        {},
        {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          providerData: user.providerData
        }
      )

      this.setUser(userInfo)
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapMutations('auth', ['setUser'])
  }
}
</script>

<style lang="scss" scoped>
</style>
