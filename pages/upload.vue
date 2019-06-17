<template lang="pug">
vue-dropzone(
  ref="myVueDropzone",
  id="dropzone",
  :options='dropzoneOptions'
)
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import firebase from '@/plugins/firebase'

const storage = firebase.storage()
const bucketRef = storage.refFromURL(
  'gs://fukan-232601.appspot.com/csv-uploader'
)
console.log(bucketRef)

export default {
  name: 'UploadFile',
  components: {
    'vue-dropzone': vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'gs://fukan-232601.appspot.com/csv-uploader',
        thumbnailWidth: 200,
        addRemoveLinks: false,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD CSV"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

#dropzone >>> .dz-message {
  font-weight: 700;
  color: #acacac;
}
#dropzone >>> .fa-cloud-upload {
  margin-right: 10px;
}
</style>
