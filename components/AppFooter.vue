<script setup>

onMounted(() => {
  function updateClock() {
    const now = new Date();
    const options = { timeZone: "America/Sao_Paulo", hour12: false };
    document.getElementById("clock").innerText = now.toLocaleTimeString("pt-BR", options);
  }

  setInterval(updateClock, 1000);
  updateClock();
})
</script>

<template>
  <footer class="container is--medium">
    <h2 data-cursor class="footer-title">{{ $t('footer.h2') }}</h2>
    <div class="btn_wrapper">
      <div class="col1">
        <p data-cursor>{{ $t('footer.label_start_conversation') }}</p>
        <ButtonsDirectionalHover :link="$t('footer.email_link')">
          {{ $t('footer.email_address') }}
        </ButtonsDirectionalHover>
      </div>
      <div class="col2">
        <p data-cursor>{{ $t('footer.label_message') }}</p>
        <ButtonsDirectionalHover :link="$t('footer.whatsapp_link')">
          {{ $t('footer.whatsapp_number') }}
        </ButtonsDirectionalHover>
      </div>
    </div>
    <div class="copyright">
      <p data-cursor>{{ $t('footer.copyright.label') }}</p>
      <p data-cursor>{{ $t('footer.copyright.clock') }} [ <span id="clock"></span> ]</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: max-content;
}

.footer-title{
  width: max-content;
}

.btn_wrapper {
  margin-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
}

.btn_wrapper p {
  color: var(--brand_dark_gray);
  margin-bottom: 18px;
}

.copyright {
  margin-top: 100px;
  padding: 40px 0;
  color: var(--brand_dark_gray);
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  font-size: 12px;
}

@media screen and (max-width: 767px) {
  h2 {
    text-align: center;
  }

  .btn_wrapper {
    gap: 50px;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .btn_wrapper p {
    text-align: center;
  }

  .copyright {
    flex-direction: column-reverse;
    gap: 50px;
  }

  .copyright p {
    text-align: center;
  }
}
</style>
