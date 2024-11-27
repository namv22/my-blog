/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          // green: '#xxx', 1️⃣
          // greenish: '#xxx',
      
          // 2️⃣
          background: '#1c1e45',
          surface: '#1f2251',
          primary: '#1c1e45',
          'primary-darken-1': '#171941',
          secondary: '#182353',
          'secondary-darken-1': '#192253',
          error: '#fd77a4',
          info: '#419ef9',
          success: '#00bf9a',
          warning: '#ff9f89',
        }
      },
      light: {
        colors: {
          // green: '#xxx', 1️⃣
          // greenish: '#xxx',
      
          // 2️⃣
          background: '#fdfdfd',
          surface: '#fdfdfd',
          primary: '#ffffff',
          'primary-darken-1': '#e5e5e5',
          secondary: '#fdfdfd',
          'secondary-darken-1': '#e5e5e5',
          error: '#f44335',
          info: '#1a73e8',
          success: '#4caf50',
          warning: '#fb8c00'
        }
      },
    },
  },
})
