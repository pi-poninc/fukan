<template lang="pug">
  .post-content(v-html="content")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      content: null
    }
  },
  async mounted() {
    const post = await this.fetch(this.$route.params.id)
    this.content = post.content
  },

  methods: {
    ...mapActions('post', ['fetch'])
  }
}
</script>

<style lang="scss" scoped>
</style>
