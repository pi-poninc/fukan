<template lang="pug">
.posts
  .posts__editor-header
      v-btn(color='error' @click='quit') キャンセル
      v-btn(color='success' @click='setContent') 投稿
  .posts__title
    v-text-field(label='タイトル' v-model='title')
  .posts__editor-screen
    .posts__editor-container
      editor-menu-bar(:editor='editor')
      editor-content.posts__editor-content(:editor='editor')
</template>

<script>
import { mapGetters } from 'vuex'
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image
  // Placeholder
} from 'tiptap-extensions'
import firebase from '~/plugins/firebase'
import EditorMenuBar from '~/components/molecules/editor/editor-menu-bar.vue'

export default {
  name: 'PostNew',

  components: {
    'editor-content': EditorContent,
    'editor-menu-bar': EditorMenuBar
  },

  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Image()
          // FIXME Placeholder が表示されない
          // new Placeholder({
          //   emptyClass: 'is-empty',
          //   emptyNodeText: 'Write here...',
          //   showOnlyWhenEditable: true
          // })
        ],
        content: this.html || '<h1>ここから本文</h1>',
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        }
      }),
      html: '',
      title: ''
    }
  },

  computed: {
    ...mapGetters('auth', { currentUser: 'user' })
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    quit() {
      this.editor.destroy()
      this.$router.push('/')
    },

    setContent() {
      this.editor.setContent(this.html, true)
      const db = firebase.firestore()
      const postData = {
        authorId: this.currentUser.uid,
        title: this.title,
        content: this.html,
        createdAt: new Date()
      }

      const postRef = db.collection('posts').doc()
      postData.id = postRef.id

      postRef.set(postData).then(docRef => {
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 90%;

  &__editor {
    position: relative;

    &-header {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
    }

    &-screen {
      width: 100%;
      top: 0;
      left: 0;
    }

    &-container {
      margin-left: auto;
      margin-right: auto;

      // FIXME Placeholder表示に必要だが機能していない
      // & p.is-empty:first-child::before {
      //   content: attr(data-empty-text);
      //   float: left;
      //   color: #aaa;
      //   pointer-events: none;
      //   height: 0;
      //   font-style: italic;
      // }
    }

    &-content {
      padding-bottom: 50px;
    }
  }
}
</style>
