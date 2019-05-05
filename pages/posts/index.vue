<template lang="pug">
v-layout(row)
  v-flex(xs10 offset-xs1)
    v-card
      v-list(two-line='')
        template(v-for='(post, index) in posts')
          nuxt-link(:to="{ name: 'posts-id', params: { id: post.id } }")
            v-list-tile(:key='post.id')
              v-list-tile-content
                v-list-tile-title {{ post.title }}
          v-divider(v-if='index + 1 < posts.length' :key='index')
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('post', { posts: 'all' })
  },
  fetch({ store }) {
    store.dispatch('post/fetchAll')
  }
}
</script>
