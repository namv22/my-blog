<template>
  <v-footer height="40" app relative>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <!-- Check if the icon is from FontAwesome -->
      <font-awesome-icon
        v-if="Array.isArray(item.icon)"
        :icon="item.icon"
        class="fa-icon"
      />
      <!-- Otherwise, use v-icon for Material Icons -->
      <v-icon
        v-else
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; 2016-{{ new Date().getFullYear() }}
      <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>


<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPixiv } from '@fortawesome/free-brands-svg-icons'

library.add(faPixiv)

const items = [
  {
    title: "X - Twitter",
    icon: ['fab', 'x-twitter'],
    href: "https://support.vuetifyjs.com/",
  },
  {
    title: "Pixiv",
    icon: ['fab', 'pixiv'], // FontAwesome Pixiv Icon
    href: "https://www.pixiv.net/",
  },
  {
    title: "Reddit",
    icon: ['fab', 'reddit-alien'],
    href: "https://reddit.com/r/vuetifyjs",
  },
];
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
