<script setup>
import sliderData from '../assets/data/slider.json'
import IconDocument from './icons/IconDocument.vue'
</script>

<template>
  <div class="navbar" :class="{ 'navbar--open': isOpen }">
    <nav class="menu">
      <div class="header">
        <button @click="toggleMenu" class="toggle-button">☰</button>
        <img src="/Logo.png" alt="Logo" />
      </div>
      <ul>
        <li v-for="(item, index) in side" :key="index">
          <div
            @click="toggleAccordion(index)"
            class="menu-item"
            :class="{ clicked: activeIndex === index }"
            id="menuItem"
          >
            <div class="icon-container" @click="toggleMenu">
              <IconDocument />
            </div>
            <p v-if="isOpen">{{ item.name }}</p>
            <span v-if="isOpen" class="arrow" :class="{ 'arrow--open': activeIndex === index }"
              >▾</span
            >
          </div>
          <ul v-show="activeIndex === index" class="submenu">
            <li @click="goToUrl(item.subName)">
              <a href="#">{{ item.subName }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      side: sliderData.side,
      activeIndex: null
    }
  },
  methods: {
    goToUrl(name) {
      if (name === 'Empresas') this.$router.push({ name: 'empresa' })
      if (name === 'Artículos') this.$router.push({ name: 'productos' })
    },
    toggleMenu() {
      this.isOpen = !this.isOpen
      this.activeIndex = null
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$refs.navbar.contains(event.target)) {
        this.isOpen = false
        this.activeIndex = null
      }
    },
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    beforeUnmount() {
      document.EventListener('click', this.handleClickOutside)
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: -200px;
  width: 250px;
  height: 100%;
  background-color: var(--vt-c-purple);
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  & .header {
    & .toggle-button {
      position: relative;
      left: 203.2px;
    }
    & img {
      visibility: hidden;
    }
  }
  & .icon-container {
    position: relative;
    left: 192px;
  }
}

.navbar--open {
  left: 0;
  & .header {
    & .toggle-button {
      position: relative;
      left: 0;
    }
    & img {
      visibility: visible;
    }
  }
  & .icon-container {
    position: relative;
    left: 0;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 6rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
}

.toggle-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  padding: 9.92px;
  cursor: pointer;
}

.menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  color: white;
  background-color: var(--vt-c-purple);
  transition: background-color 0.3s ease;
}

.clicked {
  background-color: var(--vt-c-purple-clicked);
}

.menu-item:hover {
  background-color: var(--vt-c-purple-hover);
  transition: background-color 0.3s ease;
}

.submenu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: var(--vt-c-purple);
  cursor: pointer;
}

.submenu li {
  padding: 10px 20px;
  background-color: var(--vt-c-purple-clicked);
}

.submenu a {
  color: white;
  text-decoration: none;
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow--open {
  transform: rotate(180deg);
}

.content {
  flex-grow: 1;
  margin-left: 50px;
  padding: 20px;
}
</style>
