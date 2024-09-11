<script setup>
import Articulos from '../assets/data/articulos.json'
</script>

<template>
  <div>
    <ul class="product-list" v-for="{ id, imagen, titulo, descripcion } in Articulos" :key="id">
      <li>
        <img :src="imagen" alt="Image Product" />
        <p>{{ titulo }}</p>
        <p>{{ descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Articulos
    }
  }
}
</script>

<style scoped>
div {
  width: 70rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
}
.product-list {
  width: 14rem;
  list-style: none;
  margin: 1rem;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & p {
    text-align: center;
    font-size: 0.7rem;
  }
  img {
    border-radius: 50%;
    border: 0.2rem solid gray;
  }
}
</style>
