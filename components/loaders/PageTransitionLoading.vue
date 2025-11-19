<script setup>
import { useGlobalStore } from '../../stores/globalStore';
import { storeToRefs } from '#imports';
const { $gsap } = useNuxtApp();

const globalStore = useGlobalStore();
const { changingRoute } = storeToRefs(globalStore);

onMounted(() => {
    const tl = $gsap.timeline()

    // document.body.style.overflowY = 'hidden'

    tl.from('.roww', {
        xPercent: -100,
        stagger: 0.1,
        duration: .7,
        ease: 'power4.inOut'
    })
    tl.to('.roww', {
        delay: .2,
        xPercent: 100,
        stagger: 0.1,
        duration: .7,
        ease: 'power4.inOut',
        onUpdate: () => {
            if (tl.progress() > 0.8) {
                // document.body.st yle.overflowY = 'auto'
            }
        },
        onComplete: () => {
            changingRoute.value = false
            console.log(changingRoute.value)
        }
    })
})
</script>

<template>
    <div class="w-screen h-screen max-w-full absolute top-0 z-50 boxx">
        <div class="h-[20vh] w-screen bg-brand_black_3 roww" v-for="i in 5" :key="i"></div>
    </div>
</template>

<style scoped>
.boxx {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    overflow: hidden;
}

.roww {
    height: 20vh;
    width: 100vw;
    max-width: 100%;
    background: var(--brand_black_semi);
}
</style>