<script setup>
import SplitType from 'split-type';
import { useGlobalStore } from '../../stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { initialLoader } = storeToRefs(globalStore);


const { $gsap } = useNuxtApp();
const { setLocale } = useI18n()

onMounted(() => {
  const hero_title = new SplitType('.hero-title');
  const hero_paragraph = new SplitType('.hero-paragraph');

  hero_title.lines.forEach((line) => (line.style.overflow = 'hidden'));
  hero_paragraph.lines.forEach((line) => (line.style.overflow = 'hidden'));

  let tl = $gsap.timeline({delay: initialLoader.value ? 5.5 : 0});

  tl.add([
    $gsap.fromTo(
      hero_title.words,
      { yPercent: 180, rotate: 10 },
      {
        yPercent: 0,
        rotate: 0,
        stagger: 0.04,
        ease: "Expo.easeInOut",
        duration: 1.2,
      }
    ),
    $gsap.fromTo(
      hero_paragraph.words,
      { yPercent: 180, rotate: 10 },
      {
        yPercent: 0,
        rotate: 0,
        stagger: 0.04,
        ease: "Expo.easeInOut",
        duration: 1.2,
      }
    ),
  ]);
});
</script>

<template>
  <main class="container is--medium hero">
    <div class="row1">
        <h1 data-cursor class="hero-title">
          A seasoned software engineer from Brazil expert at crafting memorable websites
        </h1>
      <br><br>
      <p data-cursor class="hero-paragraph">smalltribe is a branding and digital design studio. We partner with founders to build digital products.</p>
      <br>
      <buttonsWarrow>Let's talk</buttonsWarrow>
    </div>
    <div class="row2">
      <indexAbstractWaveAnimated />
      <!-- <button @click="setLocale('en')">en</button>
      <button @click="setLocale('pt')">pt</button>
      <p>{{ $t('welcome') }}</p> -->
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-color: antiquewhite; */
  min-height: 100svh;
  /* max-height: 100svh !important; */

  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  /* background: lightblue; */
}

.row1 {
  /* background: blue; */
  padding-top: calc(6em + 90px);
  margin-bottom: 4em;
}

p {
  color: var(--brand_dark_gray);
  /* background: green; */
  max-width: 450px;
}

@media screen and (max-width: 1100px) {
  h1 {
    font-size: 36px;
    max-width: 700px;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 2em;
    max-width: 700px;
  }
}
</style>
