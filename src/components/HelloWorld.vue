<template>
  <v-container class="">
    <v-responsive class="align-centerfill-height mx-auto" max-width="2200">
      <v-btn
        variant="outlined"
        @click="toggleTheme"
        class="d-flex align-center"
      >
        <font-awesome-icon :icon="[fatype, icon]" />
        <span class="ml-2">{{ buttonText }}</span>
      </v-btn>

      <v-col cols="22">
        <v-card
          class="py-4"
          color="surface-variant"
          image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
          prepend-icon="mdi-rocket-launch-outline"
          rounded="lg"
          variant="outlined"
        >
          <template #image>
            <v-img position="top right" />
          </template>

          <template #title>
            <h2 class="text-h5 font-weight-bold">Harry Vu's Random Journal</h2>
          </template>

          <template #subtitle>
            <div class="text-subtitle-1">
              Replace this page by removing
              <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
              <v-kbd>pages/index.vue</v-kbd>.
            </div>
          </template>

          <v-overlay
            opacity=".12"
            scrim="primary"
            contained
            model-value
            persistent
          />
        </v-card>
      </v-col>
      <v-row no-gutters>
        <v-col cols="2">
          <v-sheet class="pa-2 ma-2"> .v-col-2 </v-sheet>

          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            target="_blank"
            title="Documentation"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>

          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="10">
          <v-sheet class="pa-2 ma-2"> .v-col-10 </v-sheet>

          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>

          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <ImageHover />
</template>

<script setup>
//
import ImageHover from "./ImageHover.vue";
import { useTheme } from "vuetify";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const theme = useTheme();

// Toggle theme
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

// Computed properties for button text and icon
const buttonText = computed(() =>
  theme.global.current.value.dark
    ? "Execute Order 66"
    : "May the force be with you",
);

const fatype = computed(() =>
  theme.global.current.value.dark ? "fab" : "fas",
);

const icon = computed(() =>
  theme.global.current.value.dark ? "sith" : "jedi",
);

const color = computed(() =>
  theme.global.current.value.dark ? "#7fffd4" : "#8b0000",
);
</script>

<style scoped></style>
