<script setup>
import { useGlobalStore } from '../../stores/globalStore';
import { storeToRefs } from '#imports';

const globalStore = useGlobalStore();
const { changingRoute } = storeToRefs(globalStore);

const { $gsap } = useNuxtApp();

onMounted(() => {

  const tl = $gsap.timeline()

  tl.to("#workkkk", {
    delay: changingRoute.value ? 0.3 : 0,
    x: 800,
    ease: "none",
    duration: 1,
  });

});
</script>

<template>
  <div class="container is--medium test">
    <h1 id="workkkk">works page</h1>
  </div>
</template>

<style scoped>
.test {
  height: 100vh;
  padding-top: 200px;
}
</style>