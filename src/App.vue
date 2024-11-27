<template>
  <v-btn @click="toggleTheme" class="d-flex align-center">
    <font-awesome-icon :icon="[fatype, icon]"/>
    <span class="ml-2">{{ buttonText }}</span>
  </v-btn>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
import { useTheme } from 'vuetify'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const theme = useTheme()

// Toggle theme
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// Computed properties for button text and icon
const buttonText = computed(() =>
  theme.global.current.value.dark ? 'Execute Order 66' : 'May the force be with you'
)

const fatype = computed(() =>
  theme.global.current.value.dark ? 'fab' : 'fas'
)

const icon = computed(() =>
  theme.global.current.value.dark ? 'sith' : 'jedi'
)

const color = computed(() =>
  theme.global.current.value.dark ? '#7fffd4' : '#8b0000'
)
</script>
