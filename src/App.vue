<template>
  <v-btn @click="toggleTheme" class="d-flex align-center">
    <v-icon>{{ icon }}</v-icon>
    <i class="fa-brands fa-sith"></i>
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
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const theme = useTheme()

// Toggle theme
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// Computed properties for button text and icon
const buttonText = computed(() =>
  theme.global.current.value.dark ? 'Welcome to the Darkside' : 'May the force be with you'
)

const icon = computed(() =>
  theme.global.current.value.dark ? 'mdi-moon-waning-crescent' : 'mdi-weather-sunny'
)
</script>
