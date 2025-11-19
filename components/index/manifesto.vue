<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const textElements = $gsap.utils.toArray(".text");
  textElements.forEach((text) => {
    $gsap.to(text, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "center 80%",
        end: "center 50%",
        scrub: true,
      },
    });
  });
});
</script>

<template>
  <div class="container is--full wrapper-bg manifestoo">
    <section class="container is--medium" id="manifesto">
      <h2 class="manifesto">
        <div class="desktop">
          <span class="text">I am a</span>
          <span class="text">problem solver</span>
          <span class="text">driven by research,</span>
          <span class="text">passionate about</span>
          <span class="text">studying and</span>
          <span class="text">focused on creating</span>
          <span class="text">out-of-the-box</span>
          <span class="text">solutions that</span>
          <span class="text">blend creativity</span>
          <span class="text">and motion.</span>
        </div>

        <div class="mobile">
          <span class="text">I am a </span>
          <span class="text">problem</span>
          <span class="text">solver</span>
          <span class="text">driven by </span>
          <span class="text">research, </span>
          <span class="text">passionate </span>
          <span class="text">about</span>
          <span class="text">studying and</span>
          <span class="text">focused on </span>
          <span class="text">creating out-of-the-box</span>
          <span class="text">solutions that</span>
          <span class="text">blend </span>
          <span class="text">creativity</span>
          <span class="text">and motion.</span>
        </div>
      </h2>
    </section>
  </div>
</template>

<style scoped>
.wrapper-bg {
  /* background: var(--brand_black_semi); */
  padding: 0;
}

#manifesto {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-bottom: calc(var(--section-padding) * 2);
  padding-top: calc(var(--section-padding) * 2);
  /* background: var(--brand_black_semi); */
}

.manifesto {
  font-size: 5.5em;
  line-height: 1.3;
}

.manifesto span {
  display: block;
}

.text {
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #ffffff, #ffffff) no-repeat;
  /* background: linear-gradient(to right, #000000, #000000) no-repeat; */
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
}

.mobile {
  display: none;
}

@media screen and (max-width: 991px) {
  .manifesto {
    font-size: 4.0em;
  }
}

@media screen and (max-width: 767px) {
  .manifesto {
    font-size: 3.0em;
  }
}

@media screen and (max-width: 479px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
