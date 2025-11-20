<template>
  <div class="btn-group">
    <a href="#where" class="btn-bubble-arrow w-inline-block">
      <div class="btn-bubble-arrow__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="100%" class="btn-bubble-arrow__arrow-svg">
          <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" stroke-miterlimit="10"
            stroke-width="1.5"></polyline>
          <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" stroke-miterlimit="10"
            stroke-width="1.5"></line>
        </svg>
      </div>
      <div class="btn-bubble-arrow__content">
        <span class="btn-bubble-arrow__content-text">
          <slot></slot>
        </span>
      </div>
      <div class="btn-bubble-arrow__arrow is--duplicate">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="100%" class="btn-bubble-arrow__arrow-svg">
          <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" stroke-miterlimit="10"
            stroke-width="1.5"></polyline>
          <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" stroke-miterlimit="10"
            stroke-width="1.5"></line>
        </svg>
      </div>
    </a>
  </div>
</template>

<style scoped>
.btn-group {
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  font-size: 16px;
  display: flex;
}

.btn-bubble-arrow {
  border-radius: 10em;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  text-decoration: none;
  display: flex;
  position: relative;
}

.btn-bubble-arrow__arrow {
  color: var(--brand_black_hover);
  background-color: var(--brand_white);
  border-radius: 10em;
  width: 3.75em;
  height: 3.75em;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.735s cubic-bezier(0.625, 0.05, 0, 1);
  transform: scale(0) rotate(0.001deg);
  transform-origin: left;
}

.btn-bubble-arrow__arrow.is--duplicate {
  z-index: 2;
  background-color: var(--brand_white);
  position: absolute;
  right: 0;
}

.btn-bubble-arrow__arrow-svg {
  width: 40%;
  height: 40%;
  transition: transform 0.735s cubic-bezier(0.625, 0.05, 0, 1);
  transform: rotate(0.001deg);
}

.btn-bubble-arrow__arrow.is--duplicate {
  position: absolute;
  z-index: 2;
  right: 0;
  transform: scale(1) rotate(0.001deg);
  transform-origin: right;
}

.btn-bubble-arrow__arrow.is--duplicate .btn-bubble-arrow__arrow-svg {
  position: relative;
  left: 2px;
  top: 2px;
}

.btn-bubble-arrow__content {
  color: var(--brand_white);
  background-color: #2DB4FA;
  border-radius: 10em;
  justify-content: center;
  align-items: center;
  height: 3.75em;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
  position: relative;
  transition: transform 0.735s cubic-bezier(0.625, 0.05, 0, 1);
  transform: translateX(-3.75em) rotate(0.001deg);
}

.btn-bubble-arrow__content-text {
  line-height: 1;
}

/* Hover */

.btn-bubble-arrow:hover .btn-bubble-arrow__content {
  transform: translateX(0em) rotate(0.001deg);
}

.btn-bubble-arrow:hover .btn-bubble-arrow__arrow-svg {
  transform: rotate(-45deg);
}

.btn-bubble-arrow:hover .btn-bubble-arrow__arrow {
  transform: scale(1) rotate(0.001deg);
}

.btn-bubble-arrow:hover .btn-bubble-arrow__arrow.is--duplicate {
  transform: scale(0) rotate(0.001deg);
}
</style>