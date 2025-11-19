<script setup>
import { MarqueesWScroll } from '#components';

const { $gsap } = useNuxtApp();

// onMounted(() => {
//   const skillsElements = $gsap.utils.toArray(".skill");
//   $gsap.to(skillsElements, {
//     backgroundSize: "100% 100%", // Cresce na altura
//     backgroundPosition: "bottom", // Mantém a origem no fundo
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".skill",
//       start: "center 80%",
//       end: "center 50%",
//       scrub: true,
//       markers: true,
//     },
//   });
// })
</script>

<template>
  <section id="services">
    <MarqueesWScroll>How i can help you </MarqueesWScroll>
    <br><br><br>
    <br><br><br>
    <div class="container is--medium test">
      <h2 class="skill">Creative development</h2>
      <h2 class="skill">Landing pages</h2>
      <h2 class="skill">Performance optimization</h2>
      <h2 class="skill">Back end APIs</h2>
      <h2 class="skill">Cloud development</h2>
      <h2 class="skill">Hosting</h2>
      <h2 class="skill">Motion & Animations</h2>
      <h2 class="skill">Infrastructure</h2>
      <h2 class="skill">CI/CD</h2>
    </div>
  </section>
</template>

<style scoped>
#services {
  width: 100vw;
  max-width: 100%;
  min-height: 100svh;
  /* background-color: lightseagreen; */
  /* background: var(--brand_black_semi); */
  padding-bottom: calc(var(--section-padding) * 2);
  /* padding-top: calc(var(--section-padding)); */
}

.test {
  /* background: var(--brand_black_semi); */
  /* height: 100vh; */
}

.skill {
  color: rgba(182, 182, 182, 0.2);
  background: linear-gradient(to top, #ffffff, #ffffff) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 100% 0%;
  /* Começa sem preenchimento vertical */
  background-position: bottom;
  /* Começa de baixo */
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
  margin: 40px 0;
  font-size: 2rem;
}
</style>
