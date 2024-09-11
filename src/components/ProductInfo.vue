<script setup>
import ContactInfoData from '../assets/data/info-contacto.json'
import CarrouselComponent from './CarrouselComponent.vue'
import ProductsList from './ProductsList.vue'
</script>

<template>
  <section class="product-container">
    <div class="contact-info">
      <div class="contact" v-for="(item, index) in contact" :key="index">
        <h2>Información del contacto</h2>
        <div>
          <div class="list">
            <ul>
              <li class="contact-address">
                <p>Dirección</p>
                <p>{{ item.address }}</p>
                <p>{{ item.city.city }}</p>
              </li>
              <li class="contact-email">
                <p>Correo electrónico</p>
                <p>{{ item.email }}</p>
              </li>
              <li class="contact-website">
                <p>Sitio Web</p>
                <p>{{ item.webSite }}</p>
              </li>
              <li class="contact-social-media">
                <p>Redes sociales</p>
                <p>{{ item.socialMedia.instagram }}</p>
                <p>{{ item.socialMedia.linkedin }}</p>
              </li>
              <li class="contact-address-email">
                <p>Dirección de correspondencia de correo</p>
                <p>{{ item.address }}</p>
                <p>{{ item.city.state }}</p>
              </li>
              <li class="contact-phone">
                <p>Número de teléfonos</p>
                <p>Fijo</p>
                <p>{{ item.phone.line }}</p>
                <p>Celular</p>
                <p>{{ item.phone.cellphone }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="carrousel-container">
      <CarrouselComponent :images="images" />
    </div>
    <div class="product-list-container">
      <h1><ProductsList /></h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: ContactInfoData.contactInfo,
      images: [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3'
      ]
    }
  }
}
</script>

<style scoped>
.product-container {
  background-color: var(--vt-c-bg);
  display: grid;
  grid-template-columns: 37rem 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: 97.5vw;
  height: 80vh;
}

.contact {
  width: 30rem;
  height: 45rem;
  background-color: var(--vt-v-white);
  box-shadow: 1px 5px 14px -1px #616161;
  margin: 5rem 4rem 3rem 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  & h2 {
    margin: 2rem 0;
    text-align: right;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    & li {
      text-align: center;
    }
  }
  & ul {
    list-style: none;
    padding: 0;
    width: 15rem;
  }
  & .contact-address,
  .contact-email,
  .contact-website,
  .contact-social-media,
  .contact-address-email,
  .contact-phone {
    margin-bottom: 1rem;
  }
}

.contact-address p:first-of-type,
.contact-email p:first-of-type,
.contact-website p:first-of-type,
.contact-social-media p:first-of-type,
.contact-address-email p:first-of-type,
.contact-phone p:first-of-type {
  font-weight: 600;
}

.carrousel-container {
  width: 70rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  box-shadow: 1px 5px 14px -1px #616161;
}

.product-list-container {
  width: 70rem;
  height: 18rem;
  border-radius: 0.5rem;
  box-shadow: 1px 5px 14px -1px #616161;
}

.contact-info {
  grid-area: 1 / 1 / 3 / 2;
}
.carrousel-container {
  grid-area: 1 / 2 / 2 / 3;
}
.product-list-container {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
