<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {

  $gsap.timeline({
    scrollTrigger: {
      trigger: '#manifesto',
      start: '20% bottom',
      end: 'top center',
      toggleActions: 'play none none reverse', // muda instantaneamente
      // markers: true,
    }
  }).to('body', { backgroundColor: '#141517', duration: .3 });

  $gsap.timeline({
    scrollTrigger: {
      trigger: '#work',
      start: '30% bottom',
      end: 'top center',
      toggleActions: 'play none none reverse',
      // markers: true,
    }
  }).to('body', { backgroundColor: '#f0f1fa', duration: .3 });
});
</script>

<template>
  <div>
    <!-- <Loader/> -->
    <IndexHero />
    <IndexManifesto />
    <IndexServices />
    <IndexWork />
    <IndexAbout />
    <LazyIndexLinks />
  </div>
</template>