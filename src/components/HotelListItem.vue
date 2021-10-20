<template>
  <div class="hotel">
    <hotel-description :hotel="hotel" :defaultImageUrl="defaultImageUrl" />
    <div class="hotel__footer">
      <button class="btn" @click="$router.push(`bron/${hotel.id}`)">
        Бронировать
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HotelDescription from "@/components/HotelDescription.vue";

export default Vue.extend({
  name: "HotelListItem",
  components: {
    HotelDescription,
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
.hotel {
  border: thin #c0c0c0 solid;
  padding: 2rem;

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
  }
}
</style>