<template lang="pug">
.posts
  .posts__editor-header
      v-btn(color='error' @click='clearContent') キャンセル
      v-btn(color='success' @click='setContent') 投稿
  .posts__editor-screen
    .posts__editor-container
      editor-menu-bar(:editor='editor')
      editor-content.posts__editor-content(:editor='editor')
  .export
    h3 JSON
    pre
      code(v-html='json')
</template>

<script>
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
  Image,
  Placeholder
} from 'tiptap-extensions'
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
          new Image(),
          // FIXME Placeholder が表示されない
          new Placeholder({
            emptyClass: 'is-empty',
            emptyNodeText: 'Write here...',
            showOnlyWhenEditable: true
          })
        ],
        content: `
          <h1>タイトル</h1>
          <p>本文</p>
        `,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        }
      }),
      json: '',
      html: ''
    }
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    clearContent() {
      this.editor.clearContent(true)
      this.editor.focus()
    },

    setContent() {
      this.editor.setContent(this.json, true)
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;

  &__editor {
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
      max-width: 1080px;
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

  .export {
    max-width: 1200px;

    pre {
      padding: 1rem;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      background: black;
      color: white;

      code {
        display: block;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
