<template>
  <div class="hotel">
    <h3>{{ hotel.title }}</h3>
    <div class="body">
      <img class="hotel-image" :src="hotel.imageUrl || defaultImageUrl" />
      <div class="body-text">{{ hotel.body }}</div>
    </div>
    <div class="footer">
      <button class="btn" @click="$router.push(`bron/${hotel.id}`)">
        Бронировать
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HotelList",

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
  box-shadow: 5px 5px 5px gray;
  padding: 2rem;

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

  .footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    .btn {
      padding: 0.4rem 2rem;
      display: block;
      background-color: #333;
      color: white;
      font-size: 15px;
    }
    .btn:hover {
      color: white;
      font-size: 18px;
      background-color: #555;
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 768px) {
  .hotel {
    .body {
      flex-direction: column;

      .body-text {
        padding-top: 1rem;
      }
    }
  }
}
</style>