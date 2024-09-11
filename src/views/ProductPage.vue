<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarVertical from '@/components/SidebarVertical.vue'
import ProductInfo from '@/components/ProductInfo.vue'
</script>

<template>
  <main>
    <NavbarComponent />
    <SidebarVertical />
    <ProductInfo />
  </main>
</template>

<style>
main {
  width: 100%;
}
</style>