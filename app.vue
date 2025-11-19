<script setup lang="ts">
import 'lenis/dist/lenis.css';


onMounted(() => {
  useSmoothScroll();

  const documentTitleStore = document.title;
  const documentTitleOnBlur = "Let's Create! 💪"; // Define your custom title here

  // Set original title if user is on the site
  window.addEventListener("focus", () => {
    document.title = documentTitleStore;
  });

  // If user leaves tab, set the alternative title
  window.addEventListener("blur", () => {
    document.title = documentTitleOnBlur;
  });
})


useSeoMeta({
  title: "Eduardo A. Garcia • Formatura",
  ogTitle: "Eduardo A. Garcia • Formatura",
  description:
    "Ficarei muito feliz em ter você comigo para celebrar essa conquista.",
  ogDescription:
    "Ficarei muito feliz em ter você comigo para celebrar essa conquista.",
  ogImage: '/main-formatura.JPEG',
});


</script>

<template>
  <main>
    <LoadersInitialLoading/>
    <!-- <Cursor /> -->
    <h1>Chegouu o dia!</h1>
    <p class="subtitle">Depois de anos de dedicação, desafios e muito aprendizado, estou prestes a viver um dos momentos mais importantes da minha vida: minha formatura em Engenharia de Software.</p>
    <br>
    <buttonsWarrow>Aonde vai ser?</buttonsWarrow>
    <div class="main-picture">
        <img src="/main-formatura.JPEG" alt="mockup2" loading="lazy" />
    </div>
    <MarqueesWScroll>SAVE THE DATE </MarqueesWScroll>
    <h1 class="h2">Onde vai ser?</h1>
    <div class="two-col">
      <h2 class="address"><span>Av.Montenegro nº51, Petrópolis, Porto Alegre - RS</span></h2>
      <br><br>
      <h2 class="address">CEP = <span>90460-160</span></h2>
      <br><br>
      <h2 class="address">Latitude = <span>-30.041125</span></h2>
      <br><br>
      <h2 class="address">Longitude = <span>-51.1812844</span></h2>
      <br><br><br>
      <div class="col2">
        <div class="img-wrapper-place">
          <img src="/mason.webp" alt="">
        </div>
      </div>
      <MarqueesMarqueeTwo>MAS E O DIA?? </MarqueesMarqueeTwo>
      <h3>9</h3>
      <h3 class="sub-h3">JAN - 2026</h3>
      <h1 class="h6">Quer me dar uma <span>força</span>?</h1>
      <p class="gift-p">Uma jornada acaba porém outras 5 vão se iniciar, se quiserem me <span>ajudar ou presentear de alguma forma</span>. Mas deixo bem claro que é totalmente opcional, viu?  </p><br>
      <p class="gift-p">Os “presentes” são <span>contribuições simbólicas</span> (em Pix ou dinheiro) e cada um participa se quiser e como quiser.</p><br>
      <p class="gift-p">(os valores abaixo são apenas exemplos, caso queira contribuir com qualquer outro valor, estarei imensamente grato!)</p>
    </div>
  </main>
</template>

<style>
body{
  background-color: #111112;
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
  color: var(--brand_dark_gray);  
}

.main-picture{
  margin-top: 50px;
  width: 100%;
  /* height: 400px; */
  background: lightgreen;
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

.address span{
  background-color: #2DB4FA;
  color: white;
  border-radius: 2px;
  padding: 4px;
}

.img-wrapper-place{

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

@media screen and (max-width: 600px) {
  h3{
    font-size: 20em;
  }

  .sub-h3{
    font-size: 2em;
  }
  
}

@media screen and (max-width: 400px) {
    .sub-h3{
    position: relative;
    top: -20px;
    font-size: 2em;
    color: #fff;
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
</style>
