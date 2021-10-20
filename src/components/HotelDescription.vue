<template>
  <div class="hotel-description">
    <h3>{{ hotel.title }}</h3>
    <div class="hotel-description__body">
      <img
        class="hotel-description__image"
        :src="hotel.imageUrl || defaultImageUrl"
      />
      <div class="hotel-description__text">{{ hotel.body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HotelDescription",

  props: {
    hotel: {
      type: Object,
    },
    defaultImageUrl: {
      type: String,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hotel-description {
  &__body {
    display: flex;
  }

  &__image {
    width: 40%;
    min-width: 250px;
    max-height: 200px;
    object-fit: contain;
    margin-right: 1rem;
  }

  &__text {
    padding-top: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .hotel-description {
    &__body {
      flex-direction: column;
    }
  }
}
</style>