<script setup>
import Ukiyo from "ukiyojs";
import SplitType from 'split-type';

const { $gsap } = useNuxtApp();


onMounted(() => {
  const profile_pic = document.querySelectorAll(".profile_pic");
  new Ukiyo(profile_pic, {
    scale: 1.1,
    speed: 2,
    willChange: true,
    wrapperClass: "ukiyo-wrapper",
    externalRAF: false,
  });

  const header = new SplitType('.index-about-title')
  header.lines.forEach((line, index) => {
    line.style.overflow = 'hidden'
  })

  const paragraph = new SplitType('.index-about-paragraph')
  paragraph.lines.forEach((line, index) => {
    line.style.overflow = 'hidden'
  })


  let tl = $gsap.timeline({
  scrollTrigger: {
    trigger: '.index-about-title',
    start: 'top 97%', // ativa mais cedo
    end: 'bottom 80%', // finaliza mais rápido
    toggleActions: 'play none none none',
    // markers: true
  }
})

tl.fromTo(header.words, 
  { yPercent: 180, rotate: 10 }, 
  { yPercent: 0, rotate: 0, stagger: 0.02, duration: 0.6 }, "<+=0.2")
  .fromTo(paragraph.words, 
  { yPercent: 180, rotate: 10 }, 
  { yPercent: 0, rotate: 0, stagger: 0.005, duration: 0.5 }, "<+=0.2")
});
</script>

<template>
  <section class="container is--medium" id="about">
    <div class="col1">
      <div class="image_container">
        <!-- <MagneticButton class="btn_about" /> -->
        <div class="image_wrapper">
          <img src="/headphoto.webp" alt="" class="profile_pic" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="text_wrapper">
        <h2 data-cursor class="index-about-title">{{ $t('index.about.h2') }}</h2>
        <br />
        <br />
        <p data-cursor class="index-about-paragraph">
          {{ $t('index.about.p') }}
        </p>
        <br />
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  min-height: 100svh;

  padding-bottom: var(--section-padding);
  padding-top: var(--section-padding);
  display: flex;
  gap: 100px;
}

.col1 .image_container {
  position: relative;
}

.col1 .image_container .btn_about {
  position: absolute;
  z-index: 100;
  right: -100px;
  top: 50px;
}

.col1 .image_container .image_wrapper {
  max-width: 500px;
}

.col1 .image_container .image_wrapper img {
  width: 100%;
  filter: grayscale(100%);
}

.col2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.col2 .text_wrapper h2 {
  max-width: 500px;
  font-size: 2.5rem;
}

.col2 .text_wrapper p {
  max-width: 500px;
  color: var(--brand_dark_gray);
}

@media screen and (min-width: 1200px) {
  #about {
    gap: 200px;
  }

  .col1 .image_container .image_wrapper {
    max-width: 700px;
  }

  .col2 .text_wrapper h2 {
    max-width: 300px;
  }

  .col2 .text_wrapper p {
    max-width: 480px;
  }
}


@media screen and (max-width: 900px) {
  #about {
    flex-direction: column-reverse;
    gap: 20px;
    min-height: max-content;
    padding-bottom: 100px;
    padding-top: 100px;
  }

  .col1 .image_container .image_wrapper {
    max-width: none;
  }

  .col2 {
    align-items: flex-start;
  }

  .col2 .text_wrapper h2 {
    font-size: 54px;
  }

  .col2 .text_wrapper p {
    font-size: 20px;
    max-width: none;
  }
}

@media screen and (max-width: 600px) {
  .col2 .text_wrapper h2 {
    font-size: 32px;
    max-width: 300px;
  }

  .col2 .text_wrapper p {
    font-size: 16px;
  }
}
</style>
