<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="600"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          cover
        >
          <!-- Animated Hover Reveal -->
          <div
            class="v-card--reveal"
            :class="{ 'v-card--reveal-active': isHovering }"
          >
            <span class="centered-text">Hololive</span>
          </div>
        </v-img>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
/* Hover Text Container */
.v-card--reveal {
  position: absolute;
  bottom: -100%; /* Start hidden below the card */
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Optional background */
  transition: bottom 0.6s ease-in-out, opacity 0.6s ease-in-out;
  opacity: 0; /* Fully transparent by default */
}

.v-card--reveal-active {
  bottom: 0; /* Slide into view */
  opacity: 1; /* Become visible */
}

/* Centered Text */
.centered-text {
  font-size: 24px;
  font-weight: bold;
  color: white; /* Ensure text is visible */
  text-decoration: underline;
  position: relative;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start below */
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}

.v-card--reveal-active .centered-text {
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Move into place */
}

/* Hover Rectangle Effect */
.centered-text::before {
  content: '';
  position: absolute;
  left: -40px; /* Constant spacing on the sides */
  right: -40px;
  top: 50%; /* Start at the middle */
  height: 0; /* Start with no height */
  border: 4px solid white; /* Rectangle border */
  border-radius: 0; /* Sharp corners */
  opacity: 1; /* Visible by default */
  transition: height 0.6s ease-in-out, top 0.6s ease-in-out;
}

.v-card--reveal-active .centered-text::before {
  top: -10px; /* Extend to the top boundary */
  height: calc(100% + 20px); /* Grow the height dynamically */
}
</style>
