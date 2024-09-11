<script setup>
import ContactInfoData from '../assets/data/info-contacto.json'
</script>

<template>
  <section class="contact-container">
    <div class="company" v-for="(item, index) in company" :key="index">
      <div>
        <h2>Información de la empresa</h2>
        <ul>
          <li class="name">
            <p>Nombre</p>
            <p>{{ item.name }}</p>
          </li>
          <li class="date">
            <p>Fecha de creación</p>
            <p>{{ item.date }}</p>
          </li>
          <li class="address">
            <p>Dirección</p>
            <p>{{ item.address }}</p>
            <p>{{ item.city }}</p>
          </li>
          <li class="phone">
            <p>Números de teléfonos</p>
            <p>Fijo</p>
            <p>{{ item.phone.line }}</p>
            <p>Fax</p>
            <p>{{ item.phone.fax }}</p>
          </li>
          <li class="website">
            <p>Sitio web</p>
            <p>{{ item.webSite }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="contact" v-for="(item, index) in contact" :key="index">
      <h2>Información del contacto</h2>
      <div>
        <div class="list">
          <div class="list-1">
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
            </ul>
          </div>
          <div class="list-2">
            <ul>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      company: ContactInfoData.companyInfo,
      contact: ContactInfoData.contactInfo
    }
  }
}
</script>

<style scoped>
.contact-container {
  width: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.company {
  width: 30rem;
  height: 40rem;
  background-color: var(--vt-v-white);
  box-shadow: 1px 5px 14px -1px #616161;
  margin: 5rem 4rem 3rem 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & h2 {
    text-align: right;
    margin-bottom: 2rem;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & li {
      text-align: center;
    }
  }
  & ul {
    list-style: none;
    padding: 0;
    width: 12rem;
  }
  & .name,
  .date,
  .address,
  .phone,
  .website {
    margin-bottom: 2rem;
  }
}

.company,
.contact {
  border-radius: 0.5rem;
}

.contact {
  width: 50rem;
  height: 40rem;
  background-color: var(--vt-v-white);
  box-shadow: 1px 5px 14px -1px #616161;
  margin: 5rem 4rem 3rem 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  & .list {
    display: flex;
    align-items: start;
    &.list-1,
    .list-2 {
      width: 20rem;
    }
    & .list-1 {
      margin-right: 2rem;
    }
    & .list-2 {
      border-left: 0.2rem solid grey;
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
    margin-bottom: 5rem;
  }
}

.name p:first-of-type,
.date p:first-of-type,
.address p:first-of-type,
.phone p:first-of-type,
.website p:first-of-type {
  font-weight: 600;
}

.contact-address p:first-of-type,
.contact-email p:first-of-type,
.contact-website p:first-of-type,
.contact-social-media p:first-of-type,
.contact-address-email p:first-of-type,
.contact-phone p:first-of-type {
  font-weight: 600;
}
</style>
