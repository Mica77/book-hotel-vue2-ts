<template>
  <form @submit.prevent>
    <div class="bron">
      <div class="section">
        <label>Адрес</label>
        <textarea name="address" v-model="bookParams.address" />
      </div>
      <div class="section">
        <label>Имя</label>
        <input type="text" name="name" v-model="bookParams.name" />
      </div>
      <div class="section">
        <label>Телефон</label>
        <input type="phone" name="phone" v-model="bookParams.phone" />
      </div>
      <div class="section section--buttons">
        <button class="btn" @click="book">Бронировать</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BronForm",

  data() {
    return {
      bookParams: {
        address: "",
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    book() {
      this.$emit("book", this.bookParams);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bron {
  max-width: 600px;
  .section {
    display: flex;
    flex-direction: column;
    padding-bottom: 0.4rem;
  }

  .section--buttons {
    padding-top: 1rem;
    align-items: flex-end;
  }
}
</style>

