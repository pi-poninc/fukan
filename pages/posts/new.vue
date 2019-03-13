<template lang="pug">
.posts__editor-screen
  .posts__editor-container
    editor-menu-bar(:editor='editor')
      .menubar(slot-scope='{ commands, isActive }')
        button.menubar__button(:class="{ 'is-active': isActive.bold() }", @click='commands.bold')
          v-icon format_bold
        button.menubar__button(:class="{ 'is-active': isActive.italic() }", @click='commands.italic')
          v-icon format_italic
        button.menubar__button(:class="{ 'is-active': isActive.strike() }", @click='commands.strike')
          v-icon strikethrough_s
        button.menubar__button(:class="{ 'is-active': isActive.underline() }", @click='commands.underline')
          v-icon format_underline
        button.menubar__button(:class="{ 'is-active': isActive.code() }", @click='commands.code')
          v-icon code
        button.menubar__button(:class="{ 'is-active': isActive.heading({ level: 1 }) }", @click='commands.heading({ level: 1 })')
          | H1
        button.menubar__button(:class="{ 'is-active': isActive.heading({ level: 2 }) }", @click='commands.heading({ level: 2 })')
          | H2
        button.menubar__button(:class="{ 'is-active': isActive.heading({ level: 3 }) }", @click='commands.heading({ level: 3 })')
          | H3
        button.menubar__button(:class="{ 'is-active': isActive.bullet_list() }", @click='commands.bullet_list')
          v-icon list
        button.menubar__button(:class="{ 'is-active': isActive.ordered_list() }", @click='commands.ordered_list')
          v-icon format_list_numbered
        button.menubar__button(:class="{ 'is-active': isActive.blockquote() }", @click='commands.blockquote')
          v-icon format_quote
        button.menubar__button(:class="{ 'is-active': isActive.code_block() }", @click='commands.code_block')
          v-icon code
        button.menubar__button(@click='commands.horizontal_rule')
          v-icon border_horizontal
        button.menubar__button(@click='commands.undo')
          v-icon undo
        button.menubar__button(@click='commands.redo')
          v-icon redo

    editor-content(:editor='editor')
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
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
  History
} from 'tiptap-extensions'

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
          new History()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    }
  },

  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>

<style lang="scss" scoped>
.posts {
  &__editor-screen {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 70px;
  }

  &__editor-container {
    max-width: 825px;
    margin-left: auto;
    margin-right: auto;
  }

  &__editor-content {
    padding-bottom: 100px;
  }
}
</style>
