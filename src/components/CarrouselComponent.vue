<template>
  <div class="carousel">
    <div class="carousel-container">
      <div
        class="carousel-item"
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
      >
        <img :src="image" alt="carousel image" />
      </div>
    </div>

    <button class="arrow left" @click="prev">&#10094;</button>
    <button class="arrow right" @click="next">&#10095;</button>

    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: null
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goTo(index) {
      this.currentIndex = index
    },
    startAutoSlide() {
      this.interval = setInterval(this.next, 5000)
    },
    stopAutoSlide() {
      clearInterval(this.interval)
    }
  },
  beforeUnmount() {
    this.stopAutoSlide()
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 50rem;
  margin: auto;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-100%);
}

.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.carousel-item.active {
  opacity: 1;
}

img {
  width: 100%;
  display: block;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.625rem;
  cursor: pointer;
  font-size: 1.125rem;
  z-index: 10;
}

.arrow.left {
  left: 0.625rem;
}

.arrow.right {
  right: 0.625rem;
}

.indicators {
  position: absolute;
  bottom: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.31rem;
}

.indicators span {
  width: 0.625rem;
  height: 0.625rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
