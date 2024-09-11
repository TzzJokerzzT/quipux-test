<script setup>
import UserMenu from './UserMenu.vue'
</script>

<template>
  <div class="logo">
    <div @click="goToHome">
      <img src="/Logo.png" alt="Logo" />
    </div>
    <div class="user"><UserMenu /></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scope>
.logo {
  width: 116.9rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: var(--vt-c-white);
  box-shadow: 1px 5px 14px -1px #616161;
  & img {
    margin-left: 2rem;
    cursor: pointer;
  }
  & .user {
    margin-right: 2rem;
  }
  .user {
    align-content: center;
  }
}
</style>
