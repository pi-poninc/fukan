<template lang="pug">
editor-menu-bar(:editor='this.editor')
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
</template>

<script>
import { EditorMenuBar } from 'tiptap'

export default {
  name: 'EditorMenuBar',

  components: {
    'editor-menu-bar': EditorMenuBar
  },

  props: {
    editor: {
      type: Object,
      required: true
    }
  }
}
</script>
