<script setup>
import { useGlobalStore } from '../../stores/globalStore';
import { storeToRefs } from '#imports';
const { $gsap } = useNuxtApp();

const globalStore = useGlobalStore();
const { initialLoader } = storeToRefs(globalStore);

function initLoaderThreeSteps() {

    var tl = $gsap.timeline();
    // $gsap.defaults({
    //     ease: "Expo.easeInOut",
    //     duration: 1.2
    // });

    const ease = "Expo.easeInOut";
    const duration = 1.2;

    /* Loading numbers */
    var randomNumbers1 = $gsap.utils.random([2, 3, 4]);
    var randomNumbers2 = $gsap.utils.random([5, 6]);
    var randomNumbers3 = $gsap.utils.random([1, 5]);
    var randomNumbers4 = $gsap.utils.random([7, 8, 9]);

    /* Loading Timeline */
    tl.set(".loading-screen", {
        display: "block",
    });

    tl.set(".loading__progress-inner", {
        scaleY: 0
    });

    tl.set(".loading__number-group.is--first .loading__number-wrap, .loading__percentage", {
        yPercent: 100
    });

    tl.set(".loading__number-group.is--second .loading__number-wrap, .loading__number-group.is--third .loading__number-wrap", {
        yPercent: 10
    });

    tl.to(".loading__progress-inner", {
        scaleY: (randomNumbers1 + "" + randomNumbers3) / 100,
        ease,
        duration,
    });

    tl.to(".loading__percentage", {
        yPercent: 0,
        ease,
        duration
    }, "<");

    tl.to(".loading__number-group.is--second .loading__number-wrap", {
        yPercent: (randomNumbers1 - 1) * -10,
        ease,
        duration,
    }, "<");

    tl.to(".loading__number-group.is--third .loading__number-wrap", {
        yPercent: (randomNumbers3 - 1) * -10,
        ease,
        duration,
    }, "<");

    tl.to(".loading__progress-inner", {
        scaleY: (randomNumbers2 + "" + randomNumbers4) / 100,
        ease,
        duration,
    });

    tl.to(".loading__number-group.is--second .loading__number-wrap", {
        yPercent: (randomNumbers2 - 1) * -10,
        ease,
        duration,
    }, "<");

    tl.to(".loading__number-group.is--third .loading__number-wrap", {
        yPercent: (randomNumbers4 - 1) * -10,
        ease,
        duration,
    }, "<");

    tl.to(".loading__progress-inner", {
        scaleY: 1,
        ease,
        duration,
    });

    tl.to(".loading__number-group.is--second .loading__number-wrap", {
        yPercent: -90,
        ease,
        duration,
    }, "<");

    tl.to(".loading__number-group.is--third .loading__number-wrap", {
        yPercent: -90,
        ease,
        duration,
    }, "<");

    tl.to(".loading__number-group.is--first .loading__number-wrap", {
        yPercent: 0,
        ease,
        duration,
    }, "<");

    // removing numbers
    // Remover os números e o símbolo de porcentagem
// Remover os números e o símbolo de porcentagem
tl.to(
  [".loading__percentage", 
   ".loading__number-group.is--third .loading__number-wrap",
   ".loading__number-group.is--second .loading__number-wrap",
   ".loading__number-group.is--first .loading__number-wrap"], 
  {
    yPercent: -200,
    duration: 0.5, // mais rápido!
    ease: "power3.inOut"
  }
);

    tl.from(".rows_initial_loader", {
        xPercent: -100,
        stagger: 0.1,
        duration: .7,
        ease: 'power4.inOut',
        onUpdate: () => {
            if (tl.progress() > 0.8) {
                console.log('done')
                document.querySelector(".loading__progress").style.display = "none";
                document.querySelector(".loading-container").style.backgroundColor = "transparent";

            }
        },
    })

    tl.to('.rows_initial_loader', {
        delay: .2,
        xPercent: 100,
        stagger: 0.1,
        duration: .7,
        ease: 'power4.inOut',
        onComplete: () => {
            document.querySelector(".loading-container").style.display = "none";
            initialLoader.value = false
        }
    })
}


onMounted(() => {

    initLoaderThreeSteps();
})
</script>

<template>
    <div class="loading-container">
        <div class="loading-screen">
            <div class="h-[20vh] w-screen bg-brand_black_3 rows_initial_loader" v-for="i in 5" :key="i"></div>
            <div class="loading__progress">
                <div class="loading__progress-inner"></div>
            </div>
            <div class="loading__numbers">
                <div class="loading__number-group is--first">
                    <div class="loading__number-wrap"><span class="loading__number">1</span></div>
                </div>
                <div class="loading__number-group is--second">
                    <div class="loading__number-wrap"><span class="loading__number">1</span><span
                            class="loading__number">2</span><span class="loading__number">3</span><span
                            class="loading__number">4</span><span class="loading__number">5</span><span
                            class="loading__number">6</span><span class="loading__number">7</span><span
                            class="loading__number">8</span><span class="loading__number">9</span><span
                            class="loading__number">0</span></div>
                </div>
                <div class="loading__number-group is--third">
                    <div class="loading__number-wrap"><span class="loading__number">1</span><span
                            class="loading__number">2</span><span class="loading__number">3</span><span
                            class="loading__number">4</span><span class="loading__number">5</span><span
                            class="loading__number">6</span><span class="loading__number">7</span><span
                            class="loading__number">8</span><span class="loading__number">9</span><span
                            class="loading__number">0</span></div>
                </div>
                <div class="loading__percentage-wrap"><span class="loading__percentage">%</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loading-screen {
    pointer-events: auto;
    /* background-color: #E2E1DF; */
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
}

.rows_initial_loader {
    background: #2DB4FA;
    z-index: 999;
    top: 0;
    height: 20vh;
    width: 100vw;
    max-width: 100%;
    /* border: 1px solid #000; */
}

.loading-container {
    z-index: 999;
    pointer-events: none;
    background-color: #111112;
    position: fixed;
    inset: 0;
    overflow: hidden;
    color: #2DB4FA;
}

.loading__progress {
    width: 1em;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.loading__progress-inner {
    transform-origin: bottom;
    background-color: #2DB4FA;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.loading__numbers {
    flex-flow: row;
    align-items: flex-start;
    font-size: calc(10vw + 10vh);
    display: flex;
    position: absolute;
    bottom: .1em;
    left: .23em;
}

.loading__number-group {
    flex-flow: column;
    height: 1em;
    display: flex;
    position: relative;
    overflow: hidden;
}

.loading__number-wrap {
    will-change: transform;
    flex-flow: column;
    display: flex;
    position: relative;
}

.loading__number {
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    position: relative;
}

.loading__percentage-wrap {
    flex-flow: column;
    justify-content: flex-start;
    margin-top: .375em;
    font-size: .3em;
    display: flex;
    overflow: hidden;
    /* background: red; */
}

.loading__percentage {
    text-transform: uppercase;
    will-change: transform;
    font-family: PP Neue Corp Tight, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    position: relative;
}
</style>