<script setup>
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath()

const { t } = useI18n(); // Importa a função de tradução corretamente

const links = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/works' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];


const menuOpen = ref(false);

function initDetectScrollingDirection() {
  let lastScrollTop = 0;
  const threshold = 10; // Minimal scroll distance to switch to up/down 
  const thresholdTop = 50; // Minimal scroll distance from top of window to start

  window.addEventListener('scroll', () => {
    const nowScrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
      // Update Scroll Direction
      const direction = nowScrollTop > lastScrollTop ? 'down' : 'up';
      document.querySelectorAll('[data-scrolling-direction]').forEach(el =>
        el.setAttribute('data-scrolling-direction', direction)
      );

      // Update Scroll Started
      const started = nowScrollTop > thresholdTop;
      document.querySelectorAll('[data-scrolling-started]').forEach(el =>
        el.setAttribute('data-scrolling-started', started ? 'true' : 'false')
      );

      const isMenuActive = document.querySelector('.father-container').classList.contains('menu-active');
      document.querySelectorAll('[data-menu-opened]').forEach(el =>
        el.setAttribute('data-menu-opened', isMenuActive ? 'true' : 'false')
      );

      lastScrollTop = nowScrollTop;
    }
  });
}


function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  const parent = document.querySelector('.father-container');
  parent.classList.toggle('menu-active', menuOpen.value);
}

function goToPage(path) {
  toggleMenu();
  router.push(localePath(path));
}

function handleOutsideClick(event) {
  const menu = document.querySelector('.father-container');
  if (menuOpen.value && !menu.contains(event.target)) {
    toggleMenu();
  }
}

onMounted(() => {
  initDetectScrollingDirection();

  document.addEventListener('click', handleOutsideClick);
});
</script>

<template>
  <header class="container is--medium">
    <NuxtLink :to="localePath('/')" class="logo__text" data-cursor>
      <p class="logo__text-p">© Eduardo A. Garcia</p>
      <p class="logo__text-p is--duplicate">© Eduardo A. Garcia</p>
    </NuxtLink>
    <div class="father-container">
      <div class="menu-hamburger" @click="toggleMenu" data-cursor>
        <div class="menu-hamburger__text">
          <p class="menu-hamburger__text-p">{{ $t('menu.menu_open') }}</p>
          <p class="menu-hamburger__text-p is--duplicate">{{ $t('menu.menu_close') }}</p>
        </div>
        <span class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
        </span>
      </div>
      <ul>
        <p>{{ $t('menu.navigation_label') }}</p>
        <li class="menu-link" v-for="menu in links" :key="menu.name" :class="{ inactive: localePath(menu.path) === localePath(route.path) }"
          @click="goToPage(menu.path)" data-cursor>
          <div class="menu-link__text">
            <p class="menu-link__text-p">{{ $t(`menu.${menu.name }`) }}</p>
            <p class="menu-link__text-p is--duplicate">{{ $t(`menu.${menu.name }`) }}
  
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 125 95" fill="none"
                class="marquee__advanced__arrow-svg">
                <path d="M73.6748 89.7824L116.207 47.2501L73.6748 4.71783" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
                <path d="M116.207 47.25L0.762451 47.25" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
              </svg>
            </p>
            <div class="tab_indicator" v-if="localePath(menu.path) === localePath(route.path)"></div>
          </div>
        </li>
      </ul>
      <ul>
        <li class="cta" data-cursor>
          <div class="cta-link__text">
            <p class="cta-link__text-p">{{ $t('menu.cta') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 125 95" fill="none"
                class="marquee__advanced__arrow-svg">
                <path d="M73.6748 89.7824L116.207 47.2501L73.6748 4.71783" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
                <path d="M116.207 47.25L0.762451 47.25" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
              </svg>
            </p>
            <p class="cta-link__text-p is--duplicate">{{ $t('menu.cta') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 125 95" fill="none"
                class="marquee__advanced__arrow-svg">
                <path d="M73.6748 89.7824L116.207 47.2501L73.6748 4.71783" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
                <path d="M116.207 47.25L0.762451 47.25" stroke="currentColor" stroke-width="12.1521"
                  stroke-miterlimit="10"></path>
              </svg>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header{
  position: relative;
  position: fixed;
  z-index: 998;
  margin: 0 auto;

  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  height: 90px;
}

.logo {
  color: var(--brand_dark_gray);
}

.logo__text {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  
}

.logo__text-p {
  font-size: 1em;
  color: var(--brand_black);

  transition: all 0.6s cubic-bezier(0.625, 0.05, 0, 1);
  transform: translateY(0%) rotate(0.001deg);
  color: var(--brand_dark_gray);

}

.logo__text-p.is--duplicate {
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--brand_dark_gray);

}

.logo__text:hover .logo__text-p {
  transform: translateY(-150%) rotate(0.001deg);
}


.father-container {
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  pointer-events: none;
}


ul {
  background-color: white;
  min-width: 250px;
  width: 100%;
  max-width: 300px;
  list-style: none;
  border-radius: 8px;

  -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  overflow: hidden;
  position: relative;

  transform: translate3d(0, 5.5em, 0) rotate(-3.5deg);
  transition: .5s cubic-bezier(.39, .52, 0, 1);
  transition-delay: .1s;
  pointer-events: all;
}

ul p {
  padding: 28px 0 10px 28px;
  font-size: 13px;
  color: var(--brand_light_gray);
}

.menu-link {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all .3s;
  padding: 0;
}

.menu-link.inactive {
  pointer-events: none;
}

.menu-link.inactive p {
  color: var(--brand_dark_gray);
}

.menu-link__text {
  position: relative;
  display: block;
  overflow: hidden;
}

.menu-link__text .tab_indicator {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 40px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: var(--brand_dark_gray);
}

.menu-link__text-p {
  font-size: 1.2em;
  padding: 20px 28px;
  color: var(--brand_black);

  transition: all 0.6s cubic-bezier(0.625, 0.05, 0, 1);
  transform: translateY(0%) rotate(0.001deg);

}

.link {
  text-decoration: none;
}

.menu-link__text-p.is--duplicate {
  position: absolute;
  top: 100%;
  left: 0;
  color: var(--brand_dark_gray);
  display: block;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-link__text-p.is--duplicate svg {
  width: 40px;
  height: 20px;
}

.menu-link:hover .menu-link__text-p {
  transform: translateY(-96%) rotate(0.001deg);
}


ul li:hover {
  background: var(--brand_light_gray);
}

ul::after {
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: .5s cubic-bezier(.39, .52, 0, 1);
  background: var(--brand_black_hover);
  width: 100%;
}

.cta {
  background: var(--brand_black_hover);
  color: var(--brand_white);
  padding: 20px 28px;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s, transform 0.6s cubic-bezier(0.625, 0.05, 0, 1);
  border: none;
}

.cta svg {
  width: 40px;
  height: 20px;
  transform: rotate(-35deg);
}

.cta:hover {
  background: var(--brand_dark_gray);
}

.cta-link__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.cta-link__text-p {
  font-size: 1.2em;
  color: var(--brand_white);
  padding: 0;
  margin: 0;
  transition: transform 0.6s cubic-bezier(0.625, 0.05, 0, 1);
  transform: translateY(0%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cta-link__text-p.is--duplicate {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  color: var(--brand_white);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cta:hover .cta-link__text-p {
  transform: translateY(-100%);
}

.menu-active ul {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  transform: translateZ(0);
}

.menu-active ul:after {
  top: -100%;
  transition-delay: .3s;
}


.menu-hamburger {
  width: max-content;
  background: var(--brand_white);
  padding: 16px 24px;
  border-radius: 40px;

  display: flex;
  gap: 10px;
  align-items: center;

  cursor: pointer;

  /* transform: translateY(0%) scale(0) rotate(0.001deg); */
  transition: transform .3s cubic-bezier(0.36, 0, 0.66, 0), background .3s cubic-bezier(0.36, 0, 0.66, 0);
  pointer-events: all;

  position: relative;
  top: -15px;
}

.menu-hamburger:hover {
  background: var(--brand_light_gray);
}

.menu-hamburger__text {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.menu-hamburger__text-p {
  font-size: 17px;
  transition: transform 0.6s cubic-bezier(0.625, 0.05, 0, 1);
  transform: translateY(0%);
}

.menu-hamburger__text-p.is--duplicate {
  position: absolute;
  top: 100%;
  left: 0;
}

.menu-active .menu-hamburger__text-p {
  transform: translateY(-100%);
}

.menu-hamburger .dots {
  display: flex;
  flex-direction: column;
  gap: 2px;
  transform: rotate(90deg);
  transition: all .3s cubic-bezier(0.36, 0, 0.66, 0);
}

.menu-hamburger .dots .dot {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--brand_black);
}

.menu-hamburger:hover .dots {
  transform: rotate(0deg);
}

.menu-active .dots {
  transform: rotate(0deg);
}

[data-scrolling-started="true"][data-scrolling-direction="up"]:not([data-menu-opened="true"]) .menu-hamburger {
  transform: translateY(0%) scale(1) rotate(0.001deg);
}

[data-menu-opened="true"] .menu-hamburger {
  transform: translateY(0%) scale(1) rotate(0.001deg);
}

@media screen and (max-width: 991px) {
  .menu-hamburger {
    right: var(--container-padding);
  }

  ul {
    right: var(--container-padding);
  }
}

@media screen and (max-width: 600px){
  .menu-hamburger{
    border-radius: 100%;
    height: 40px;
    width: 40px;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-hamburger__text{
    display: none;
  }

  .logo{
    font-size: 14px;
  }
}
</style>
