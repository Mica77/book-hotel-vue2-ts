<template>
  <div class="hotel-list">
    <hotel-list-item
      v-for="hotel in hotels"
      :key="hotel.id"
      :hotel="hotel"
      :defaultImageUrl="defaultImageUrl"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HotelListItem from "@/components/HotelListItem.vue";

export default Vue.extend({
  name: "HotelList",
  components: {
    HotelListItem,
  },
  props: {
    hotels: {
      type: Array,
    },
    defaultImageUrl: {
      type: String,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.hotel-list > * {
  margin-bottom: 1.5rem;
}
</style>
