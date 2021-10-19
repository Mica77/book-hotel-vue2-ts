<template>
  <div class="center-container">
    <hotel-list
      :hotels="hotels"
      :defaultImageUrl="defaultImageUrl"
    ></hotel-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HotelList from "@/components/HotelList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default Vue.extend({
  name: "Home",
  components: {
    HotelList,
  },
  computed: {
    ...mapState({
      hotels: (state: any) => state.hotels,
      defaultImageUrl: (state: any) => state.defaultImageUrl,
    }),
  },
  methods: {
    ...mapActions({
      fetchHotels: "fetchHotels",
    }),
  },
  mounted() {
    this.fetchHotels();
  },
});
</script>

<style lang="scss" scoped>
.center-container {
  max-width: 50rem;
  margin: auto;
}
</style>
