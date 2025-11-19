<script setup>
const links = [
  {
    user: 'eduardoamengualgarcia',
    app: 'LinkedIn',
    link: 'https://www.linkedin.com/in/eduardoamengualgarcia/'
  },
  {
    user: 'duduagarcia',
    app: 'Github',
    link: 'https://github.com/duduagarcia'
  },
  {
    user: 'duduagarcia_',
    app: 'Instagram',
    link: 'https://www.instagram.com/duduagarcia_/?igshid=MTUzN2pwZDlpYXhycw%3D%3D&utm_source=qr#'
  },
  {
    user: 'duduagarcia',
    app: 'Awwwards',
    link: 'https://www.awwwards.com/duduagarcia/'
  }
]

</script>

<template>
  <section id="links">
    <div class="container is--medium">
      <h2 class="title_links" data-cursor>{{ $t('index.links.h2') }}</h2>
    </div>

    <marquees-link v-for="link in links" :key="link.app" :app="link.app" :link="link.link" :user="link.user" />

  </section>
</template>

<style scoped>
#links {
  min-height: 100svh;
  padding-bottom: var(--section-padding);
  padding-top: var(--section-padding);
}

.title_links {
  max-width: 500px;
  margin-bottom: 5rem;
}

@media screen and (min-width: 991px) {
  .title_links {
    font-size: 52px;
  }

}
</style>
