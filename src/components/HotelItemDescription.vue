<template>
  <div class="hotel-description">
    <h3>{{ hotel.title }}</h3>
    <div class="body">
      <img class="hotel-image" :src="hotel.imageUrl || defaultImageUrl" />
      <div class="body-text">{{ hotel.body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HotelItemDescription from "@/components/HotelItemDescription.vue";

export default Vue.extend({
  name: "HotelItemDescription",

  components: {
    HotelItemDescription,
  },

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
  .body {
    display: flex;
    flex-wrap: no-wrap;

    .hotel-image {
      width: 40%;
      min-width: 250px;
      max-height: 200px;
      object-fit: contain;
      margin-right: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .hotel-description {
    .body {
      flex-direction: column;

      .body-text {
        padding-top: 1rem;
      }
    }
  }
}
</style>