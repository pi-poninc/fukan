<template lang="pug">
v-app
  fukan-header
  v-content
    v-container
      nuxt
    v-footer(:height='80' app)
      .footer-items(v-for='item in footerItems')
        .footer-items__footer-item {{ item }}
</template>

<script>
import FukanHeader from './header.vue'

export default {
  name: 'Default',
  components: {
    'fukan-header': FukanHeader
  },
  data() {
    return {
      footerItems: [
        '利用規約',
        'プライバシーポリシー',
        'ご意見・ご要望',
        '使い方',
        '運営会社'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-items {
  &__footer-item {
    margin-left: 30px;
    margin-right: 50px;
  }
}
</style>
