<script setup>
const { $gsap } = useNuxtApp();
const router = useRouter();

function goToWorksPage() {
  router.push("/works");
}

onMounted(() => {
  $gsap.to(".work_card", {
    y: "-200vh",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".h2_wrapper",
      start: "center center",
      end: "+=300%",
      pin: ".container_animation",
      scrub: true,
      // markers: true,
    },
  });
});
</script>

<template>
  <section class="container_animation is--medium" id="work">
    <div class="h2_wrapper">
      <h2>Work</h2>
      <div class="work_card c1" data-cursor-work @click="goToWorksPage">
        <img src="/nubank.webp" alt="mockup2" loading="lazy" />
      </div>
      <div class="work_card c2" data-cursor-work @click="goToWorksPage">
        <img src="/typewriter.webp" alt="mockup2" loading="lazy" />
      </div>
      <div class="work_card c3" data-cursor-work @click="goToWorksPage">
        <img src="/spiderman-desktop.webp" alt="mockup2" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#work {
  width: 100%;
  min-height: 100svh;
  /* margin-top: calc(var(--section-padding) );
  margin-bottom: calc(var(--section-padding) ); */
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: calc(1rem + 15vw);
  text-transform: uppercase;
  position: relative;
  z-index: 100;
  pointer-events: none;
}

.h2_wrapper {
  position: relative;
}

.work_card {
  position: absolute;
  width: 300px;
  max-width: 300px;
  height: 500px;
  cursor: pointer;
  top: 100vh;
  z-index: 101;
}

.work_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c1 {
  /* background-color: red; */
  left: 50%;
  transform: translateX(-50%, -50%);
}

.c2 {
  /* background-color: greenyellow; */
  left: -100px;
}

.c3 {
  right: -100px;
  /* background-color: blue; */
}


@media screen and (max-width: 1000px) {

  .c1,
  .c2,
  .c3 {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 500px) {
  .work_card {
    max-width: 250px;
    width: 250px;
    height: 450px;
  }
}
</style>
