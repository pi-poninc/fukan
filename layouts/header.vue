<template lang="pug">
.fukan-header
  v-navigation-drawer(v-model='drawer' :mini-variant="miniVariant" :clipped="clipped" fixed app)
    v-list
      v-list-tile(v-for='(item, i) in items' :key='i' :to='item.to' router exact)
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  v-toolbar(:clipped-left='clipped' fixed app)
    v-toolbar-side-icon(@click='drawer = !drawer')
    v-toolbar-title.fukan-header__app-title
      nuxt-link(to='/') FUKAN
    v-toolbar-title アップロード
    v-toolbar-title チュートリアル
    v-toolbar-title
      nuxt-link(to='/posts/new') 記事作成
    v-spacer
    .fukan-header__search-form
      v-text-field(label='search' placeholder='記事を検索' solo prepend-inner-icon='search')
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'FUKAN',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'backup',
          title: 'アップロード',
          to: '/upload'
        }
      ],
      miniVariant: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fukan-header {
  position: absolute;

  &__app-title {
    cursor: pointer;
  }

  &__search-form {
    display: flex;
    justify-content: center;
    width: 300px;
  }
}
</style>
