<template>
  <div class="bron center-container">
    <hotel-description
      class="bron__hotel-description"
      :hotel="hotel"
      :defaultImageUrl="defaultImageUrl"
    />
    <bron-form v-show="!isInBook" @book="book" />
    <bron-result v-show="!!bookResult.success" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HotelDescription from "@/components/HotelDescription.vue";
import BronForm from "@/components/BronForm.vue";
import BronResult from "@/components/BronResult.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default Vue.extend({
  name: "Home",
  components: {
    BronForm,
    BronResult,
    HotelDescription,
  },
  data: () => ({
    isInBook: false,
  }),
  computed: {
    ...mapState({
      hotel: (state: any) => state.currentHotel,
      defaultImageUrl: (state: any) => "../" + state.defaultImageUrl,
      bookResult: (state: any) => state.bookResult,
    }),
  },
  methods: {
    ...mapActions({
      fetchHotel: "fetchHotel",
      makeBooking: "book",
      rejectBooking: "rejectBooking",
    }),
    book(bookParams: any) {
      this.isInBook = true;
      bookParams.hotelId = this.hotel.id;
      this.makeBooking(bookParams);
    },
  },
  created() {
    this.rejectBooking();
  },
  mounted() {
    this.fetchHotel(this.$route.params.id);
  },
});
</script>

<style lang="scss" scoped>
.bron__hotel-description {
  margin-bottom: 3rem;
}
</style>
