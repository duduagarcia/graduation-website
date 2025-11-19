<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
    $gsap.set(".cursor", {xPercent:-50, yPercent: -50});

    let xTo = $gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"});
    let yTo = $gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});

    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });
})
</script>

<template>
    <div class="cursor">
      <p>View<br>work</p>
    </div>
</template>

<style scoped>
.cursor {
  z-index: 999;
  background-color: #ff4c24;
  border: 1px solid #ff4c24;
  background-color: #0f0f0f;
  border: 1px solid #0f0f0f;
  border-radius: 100em;
  width: 1em;
  height: 1em;
  transition: background-color .375s cubic-bezier(.625, .05, 0, 1), height .375s cubic-bezier(.625, .05, 0, 1), width .375s cubic-bezier(.625, .05, 0, 1);
  position: fixed;
  inset: 0% auto auto 0%;
  pointer-events: none;
}

.cursor p{
  display: none;
  color: var(--brand_white);
}

body:has( a:hover) .cursor,
body:has( button:hover) .cursor,
body:has( [data-cursor]:hover) .cursor{
  width: 3em;
  height: 3em;
  background-color: rgba(255, 76, 36, 0.3);
  background-color: rgba(15, 15, 15, 0.3);
}

body:has( [data-cursor-work]:hover) .cursor{
  width: 9em;
  height: 9em;
  background: var(--brand_black_hover);

  display: flex;
  justify-content: center;
  align-items: center;
}

body:has( [data-cursor-work]:hover) .cursor p{
  display: block;
}


@media (hover: none) and (pointer: coarse) {
  .cursor {
    display: none;
  }
}
</style>