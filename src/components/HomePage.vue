<script setup>
import IconSearch from '@/components/icons/IconSearch.vue'
import CertificadoData from '../assets/data/certificado.json'
import TramitesData from '../assets/data/certificado.json'
import ProgressBar from './ProgressBar.vue'
import NavbarComponent from './NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <section class="homePage-container">
    <div class="search">
      <h1>¿Que quieres buscar?</h1>
      <div>
        <p>Encuentra la información que desees consultar...</p>
      </div>
      <div class="search-container">
        <select name="" id="">
          <option>Todos los servicios</option>
        </select>
        <input type="text" placeholder="Que servicio quieres consultar" />
        <button><IconSearch /></button>
      </div>
    </div>
    <div class="certificade">
      <div class="certificade-container">
        <div v-for="(item, index) in certificado" :key="index">
          <p>{{ item.name }}</p>
          <p>{{ item.description }}</p>
          <button>{{ item.btntext }}</button>
        </div>
      </div>
    </div>
    <div class="main">
      <img src="/Main.png" alt="Main Photo" />
      <h1>SERVICIOS QUIPUX</h1>
      <section v-for="(item, index) in tramites" :key="index">
        <p>{{ item.title }}</p>
        <p>{{ item.content }}</p>
        <ProgressBar />
      </section>
    </div>
    <footer class="footer"><img src="/Logo.png" alt="Logo" /></footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certificado: CertificadoData.certificado,
      tramites: TramitesData.tramites
    }
  }
}
</script>

<style scoped>
.homePage-container {
  width: 97.4vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 5rem;
  grid-template-areas:
    'search image'
    'certifcade image'
    'foot foot';
}

.logo {
  width: 116.9rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: var(--vt-c-white);
  box-shadow: 1px 5px 14px -1px #616161;
  & img {
    margin-left: 2rem;
  }
  & .user {
    margin-right: 2rem;
  }
}
.user {
  align-content: center;
}
.search {
  grid-area: search;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  margin-left: 5rem;
  & h1 {
    margin: 0% 0% 2% 5%;
    font-size: 3rem;
    font-weight: 600;
    color: var(--vt-word);
  }
  & p {
    margin-bottom: 1rem;
  }
  & .search-container {
    display: flex;
    & button {
      height: 2.5rem;
      background-color: var(--vt-word);
      border-radius: 0px 8px 8px 0px;
    }
    & input {
      width: 35rem;
    }

    & input,
    select {
      height: 2.5rem;
    }
    & select {
      width: 10rem;
      border-radius: 0.5rem 0rem 0rem 0.5rem;
      color: var(--vt-word);
      background-color: var(--vt-select-bg);
      &:active {
        background-color: var(--vt-word);
        transition: color 0.2s ease-out;
      }
      &:focus {
        color: var(--vt-c-white);
        background-color: var(--vt-word);
        transition: color 0.2s ease-out;
      }
      &:hover {
        color: var(--vt-c-white);
        transition: color 0.2s ease-out;
      }
    }
    & select,
    input,
    button {
      border: 0.1rem solid var(--vt-border);
    }
    & button {
      cursor: pointer;
      &:hover {
        background-color: var(--vt-word-ct);
        transition: background-color 0.2s ease-out;
      }
    }
  }
}
.main {
  grid-area: image;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    position: absolute;
    font-size: 3rem;
    color: var(--vt-word);
    background-color: rgba(204, 201, 201, 0.829);
  }
  & img {
    width: 29rem;
    height: auto;
  }
  & section {
    width: 30rem;
    border-left: 0.2rem solid var(--vt-word);
    box-shadow: 1px 5px 14px -1px #616161;
    & p {
      margin-left: 1rem;
    }
    & p:first-of-type {
      color: var(--vt-word-ct);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    & p:nth-child(2) {
      margin-bottom: 2rem;
    }
  }
}
.certificade {
  grid-area: certifcade;
  & .certificade-container {
    position: relative;
    left: 5rem;
    top: 6rem;
    width: 50rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 1px 5px 14px -1px #616161;
    & div {
      margin: 1rem;
      & p:first-of-type {
        color: var(--vt-word-ct);
        font-weight: 600;
        margin-bottom: 1rem;
      }
      & p:nth-of-type(2) {
        font-size: 0.7rem;
        margin-bottom: 1rem;
      }
      & button {
        width: 7rem;
        border: 0.1rem solid green;
        border-radius: 0.2rem;
        color: green;
        background-color: white;
        cursor: pointer;
        &:hover {
          color: white;
          background-color: rgb(8, 114, 8);
          transition:
            color 0.2s ease-out,
            background-color 0.2s ease-out;
        }
      }
    }
  }
}

.footer {
  grid-area: foot;
  place-self: center;
}
</style>
