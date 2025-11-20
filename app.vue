<script setup lang="ts">
import Ukiyo from "ukiyojs";
import 'lenis/dist/lenis.css';
const { $gsap } = useNuxtApp();
import SplitType from 'split-type';
import Lenis from "lenis";


onMounted(() => {
  useSmoothScroll();

  const documentTitleStore = document.title;
  const documentTitleOnBlur = "Bora bora! 💪"; // Define your custom title here

  // Set original title if user is on the site
  window.addEventListener("focus", () => {
    document.title = documentTitleStore;
  });

  // If user leaves tab, set the alternative title
  window.addEventListener("blur", () => {
    document.title = documentTitleOnBlur;
  });

  const profile_pic = document.querySelectorAll(".formatura-main-picture");

    new Ukiyo(profile_pic, {
      scale: 1.1,
      speed: 2,
      willChange: true,
      wrapperClass: "ukiyo-wrapper",
      externalRAF: false,
    });

  const hero_title = new SplitType('.hero-title');
  const hero_paragraph = new SplitType('.hero-paragraph');

  hero_title.lines.forEach((line) => (line.style.overflow = 'hidden'));
  hero_paragraph.lines.forEach((line) => (line.style.overflow = 'hidden'));


  // let tl = $gsap.timeline({delay: initialLoader.value ? 5.5 : 0});
  let tl = $gsap.timeline({delay: 5.5});

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
        stagger: 0.02,
        ease: "Expo.easeInOut",
        duration: 1,
      }
    ),
  ]);
});



// useSeoMeta({
//   title: "Eduardo A. Garcia • Formatura",
//   ogTitle: "Eduardo A. Garcia • Formatura",
//   description:
//     "Ficarei muito feliz em ter você comigo para celebrar essa conquista.",
//   ogDescription:
//     "Ficarei muito feliz em ter você comigo para celebrar essa conquista.",
//   ogImage: '/main-formatura.JPEG',
// });


</script>

<template>
  <main>
    <LoadersInitialLoading/>
    <h1 class="hero-title">Chegou o grande dia!</h1>
    <p class="subtitle hero-paragraph">Depois de anos de dedicação, desafios e muito aprendizado, estou prestes a viver um dos momentos mais importantes da minha vida: <span style="color: #2DB4FA;">minha formatura em Engenharia de Software.</span></p>
    <br>
    <buttonsWarrow id="btnn">Onde vai ser?</buttonsWarrow>
    <div class="main-picture">
        <img src="/main-formatura.JPEG" alt="mockup2" loading="lazy" class="formatura-main-picture"/>
    </div>
    <MarqueesWScroll>SAVE THE DATE </MarqueesWScroll>
    <h1 class="h2" id="where">Onde vai ser?</h1>
    <h1 class="nome-mason" ><a href="https://www.instagram.com/maisonpetropolis/" target="_blank">Mason Petrópolis Eventos</a></h1>
    <br></br><br></br><br><br><br>
    <div class="two-col">
      <h2 class="address">Endereço: <a href="https://www.google.com/maps/place/Maison+Petr%C3%B3polis+Eventos/@-30.0417033,-51.1821937,17z/data=!3m1!4b1!4m6!3m5!1s0x95197820773851fb:0xc5f1d3d15eab3533!8m2!3d-30.041708!4d-51.1796188!16s%2Fg%2F1vd7726w?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Av.Montenegro nº51, Petrópolis, Porto Alegre - RS</a></h2>
      <br><br>
      <h2 class="address">CEP = 90460-160</h2>
      <br><br>
      <h2 class="address">Latitude = -30.041125</h2>
      <br><br>
      <h2 class="address">Longitude = -51.1812844</h2>
      <br><br><br>
      <div class="col2">
        <div class="img-wrapper-place">
          <img src="/mason.webp" alt="mason" loading="lazy" class="formatura-main-picture"/>
        </div>
      </div>
      <MarqueesMarqueeTwo>MAS E O DIA?? </MarqueesMarqueeTwo>
      <h3>9</h3>
      <h3 class="sub-h3">JAN - 2026</h3>
      <h3 class="sub-h4">22H - 03H</h3>
      <h1 class="h6">Quer me dar uma <span>força</span>?</h1>
      <p class="gift-p">Uma jornada acaba porém outras 5 vão se iniciar, se quiserem me <span>ajudar ou presentear de alguma forma</span>. Mas deixo bem claro que é totalmente opcional, viu?  </p><br>
      <p class="gift-p">Os “presentes” são <span>contribuições simbólicas</span> (em Pix ou dinheiro) e cada um participa se quiser e como quiser.</p><br>
      <p class="gift-p">(os valores abaixo são apenas exemplos, caso queira contribuir com qualquer outro valor, estarei imensamente grato!)</p>
      <br><br>
      <ButtonsDirectionalHover :link="$t('footer.whatsapp_link')">
          CHAVE PIX: eduardo.agarcia117@gmail.com
      </ButtonsDirectionalHover>
      <br>
      <h4>Certificação da língua inglesa Toefl - <span style="color: #2DB4FA;">R$ 100,00</span></h4>
      <h4>Pós graduação em arquitetura de soluções na PUC-PR - <span style="color: #2DB4FA;">R$ 150,00</span></h4>
      <h4>Intercâmbio - <span style="color: #2DB4FA;">R$ 200,00</span></h4>
      <h4>Certificação: Amazon Web Services Certified Solutions Architect - <span style="color: #2DB4FA;">R$ 80,00</span></h4>
      <h4>Ingresso South Summit Brazil 2026 - <span style="color: #2DB4FA;">R$ 50,00</span></h4>
      <footer>Conto com a sua presença!</footer>
      <h5>(por favor confirmar presença até 15/12/2025)</h5>
      <!-- <div class="main-picture">
        <img src="/foto_perfil.jpeg" alt="mockup2" loading="lazy" class="formatura-main-picture"/>
      </div> -->
    </div>
  </main>
</template>

<style>
.nome-mason{
  color: #fff;
  font-size: 3em;
  color: var(--brand_dark_gray);
}

footer{
  padding-top: 30vh;
  text-align: center;
  font-size: 6em;
  text-transform: uppercase;
  color: #2DB4FA;
}

h5{
  text-align: center;
  color: #fff;
  margin-top: 20px;
  font-size: 2em;
}

@media screen and (max-width: 480px) {
  footer{
    font-size: 3em;
  }

  h5{
    font-size: 1.5em;
  }
}

/* h1 {
  margin-top: 0;
  margin-bottom: 0;

  font-weight: 500;
  line-height: 1.15;
  max-width: 900px;
} */

@media screen and (max-width: 1000px) {
  .nome-mason {
    font-size: 68px;
  }
}

@media screen and (max-width: 500px) {
  .nome-mason {
    font-size: 48px;
  }
}


body{
  background-color: #111112;
  scroll-behavior: smooth;
}

main{
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
  padding-top: 20vh;
  margin-bottom: 100px;
}

h1{
  text-transform: uppercase ;
  color: #fff;
}

.subtitle{
  margin: 20px 0 ;
  max-width: 500px;
  color: var(--brand_light_gray);  
}

.main-picture{
  margin-top: 50px;
  width: 100%;
  /* height: 400px; */
  margin-bottom: 10vh;
}

.main-picture img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.h2{
  margin-top: 20vh;
  margin-bottom: 10vh;
}

.address  {
  color: var(--brand_dark_gray);
}

.address a{
  /* text-decoration: none; */
  color: #2DB4FA;
}

.img-wrapper-place img{
  width: 100%;
  height: auto;
}

h3{
  color: #fff;
  text-align: center;
  color: #2DB4FA;
  font-size: 40em;
}

.sub-h3{
  position: relative;
  top: -50px;
  font-size: 5em;
  color: #fff;
}

.sub-h4{
  font-size: 5em;
}

@media screen and (max-width: 600px) {
  h3{
    font-size: 20em;
  }

  .sub-h3{
    font-size: 2em;
  }

  .sub-h4{
      position: relative;
      top: -50px;
      font-size: 2em;
  }
  
}

@media screen and (max-width: 400px) {
  .sub-h3{
    position: relative;
    font-size: 2em;
    color: #fff;
  }

    .sub-h4{
      position: relative;
      top: -50px;
      font-size: 2em;
  }
}

.h6{
  margin-top: 20vh;
  margin-bottom: 20px;
}

.h6 span{
  color: #2DB4FA;
}

.gift-p{
  color: var(--brand_light_gray);  
  max-width: 700px;
  
}

.gift-p span{
  color: #2DB4FA;
  font-weight: bold;
}

h4{
  color: var(--brand_dark_gray); 
  margin-bottom: 20px;
}
</style>
