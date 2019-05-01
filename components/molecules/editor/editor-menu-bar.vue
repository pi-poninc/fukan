<template lang="pug">
editor-floating-menu(:editor='this.editor')
  .editor__floating-menu(slot-scope='{ commands, isActive, menu }', :class="{ 'is-active': menu.isActive }", :style='`top: ${menu.top}px`')
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
</template>

<script>
import { EditorFloatingMenu } from 'tiptap'

export default {
  name: 'EditorMenuBar',

  components: {
    'editor-floating-menu': EditorFloatingMenu
  },

  props: {
    editor: {
      type: Object,
      required: true
    }
  },

  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  &__floating-menu {
    position: absolute;
    margin-top: -0.25rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
