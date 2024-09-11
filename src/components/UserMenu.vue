<template>
  <div class="user-menu">
    <div class="user-info" @click="toggleDropdown">
      <div class="user-icon"><img src="/UserIcon.png" alt="" /></div>
      <span class="user-name">Usuario Apellido</span>
      <i class="dropdown-icon" :class="{ open: isDropdownOpen }">▼</i>
    </div>
    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li @click="handleOption('Perfil')">Perfil</li>
      <li @click="handleOption('Configuración')">Configuración</li>
      <li @click="handleOption('Cerrar sesión')">Cerrar sesión</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handleOption(option) {
      console.log(`Opción seleccionada: ${option}`)
      this.isDropdownOpen = false
    }
  }
}
</script>

<style scoped>
.user-menu {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-icon {
  width: 2rem;
  height: 2rem;
  font-size: 24px;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 2rem;
  }
}

.user-name {
  font-weight: bold;
}

.dropdown-icon {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  width: 150px;
  z-index: 1000;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
