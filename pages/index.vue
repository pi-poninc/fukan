<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      .text-xs-center
        | ご登録ありがとうございます。
        br
        | FUKANでは重要指標をアップロードしていただくことで、
        br
        | データを解析して、上振れ、下振れしている「異常値」を特定します。
        br
        | 「異常値」が出現した原因を推定して、知見として書き溜め、
        br
        | チームに共有出来るようにしましょう。
      img(src='~/assets/images/chart-example.png' class='chart-example-img')
</template>

<script>
</script>

<style lang="scss" scoped>
.text-xs-center {
  font-size: 25px;
  font-weight: bold;
}

.chart-example-img {
  margin-top: 50px;
  width: 800px;
  height: 500px;
}
</style>
