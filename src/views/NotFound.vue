<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="main-notfound">
      <img
        src="../../public/img/notFound/notFound.svg"
        alt="brand"
        class="brand"
      />
      <h1>404 Error</h1>
      <p>Page Not Found</p>
      <router-link to="/" class="link">Ir al Home</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.main-notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
}

.brand {
  width: 40%;
}

.main-notfound > h1 {
  font-weight: 600;
  color: #fff;
}

.main-notfound > p {
  color: rgb(121, 121, 121);
}

.main-notfound > .link {
  color: rgb(9, 114, 175);
}
</style>