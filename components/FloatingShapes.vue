<template>
  <div ref="layerEl" class="floating-layer" aria-hidden="true"></div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const layerEl = ref(null)

const svgMarkup = [
  `<svg viewBox="0 0 900 900" overflow="visible">
    <g transform="matrix(1,0,0,1,-1757,0)">
      <g transform="matrix(0.06,0,0,0.09,844.5,0)">
        <g transform="matrix(27.6699,0,0,18.4466,-842141,-73510.3)">
          <path fill="var(--pink)" d="
          M31365,4147
          L31365,4006.08
          L31147,4006.08
          L31147,4147
          L31005.9,4147
          L31005.9,4365
          L31147,4365
          L31147,4506.08
          L31365,4506.08
          L31365,4365
          L31505.9,4365
          L31505.9,4147
          L31365,4147
          Z
        "/>
        </g>
      </g>
    </g>
  </svg>`,

  `<svg viewBox="0 0 64 64" overflow="visible">
    <path fill="var(--grey)" d="M45.31,5.91C40.88.99,32,7.13,32,7.13S23.13.99,18.69,5.91a6.871,6.871,0,0,0-1.55,5.93c.42,2.15,1.8,5.07,5.76,7.63.6.39,1.21.78,1.78,1.23A48.505,48.505,0,0,1,30,25.39,12.387,12.387,0,0,1,32,28a12.472,12.472,0,0,1,2-2.61,49.642,49.642,0,0,1,5.34-4.7c.56-.44,1.15-.83,1.75-1.22,3.91-2.52,5.31-5.4,5.75-7.54A6.862,6.862,0,0,0,45.31,5.91ZM32,18a3,3,0,1,1,3-3A3,3,0,0,1,32,18Z"/>
    <polygon fill="var(--pink)" points="27 60 27 47 37 47 37 51 35 51 35 56 37 56 37 60 27 60"/>
    <path fill="var(--grey)" d="M34,28.54V45H30V28.54a3.5,3.5,0,0,1,.22.37l1.76,3.43,1.79-3.41A4.348,4.348,0,0,1,34,28.54Z"/>
  </svg>`,

  `<svg viewBox="0 0 64 64" overflow="visible">
    <path fill="var(--light-grey)" d="M56.85,18.16c-3.36-3.73-8.09-4.05-12.52-3.12a28.508,28.508,0,0,0-3.88,1.13A41.583,41.583,0,0,0,32,20.45a41.583,41.583,0,0,0-8.45-4.28,28.1,28.1,0,0,0-3.88-1.13c-4.43-.93-9.15-.6-12.51,3.12a12.81,12.81,0,0,0-2.9,11.07c.77,3.923,3.246,9.225,10.262,13.925,2.1,1.408,4.172,2.857,6.136,4.454C24.549,50.77,30.074,55.667,32,59.4c1.992-3.862,7.837-8.97,11.739-12.113,1.83-1.474,3.762-2.81,5.715-4.117,6.935-4.639,9.44-9.855,10.256-13.76A12.874,12.874,0,0,0,56.85,18.16ZM35.11,45.44H28.89L30.38,32.6A3.5,3.5,0,0,1,28.6,28.629a3.461,3.461,0,0,1,2.59-2.54A3.5,3.5,0,0,1,33.62,32.6Z"/>
    <path fill="var(--grey)" d="M32,4.6a12.5,12.5,0,0,0-11.84,8.5,30.878,30.878,0,0,1,3.86,1.11,8.488,8.488,0,0,1,15.97,0,29.811,29.811,0,0,1,3.85-1.11A12.5,12.5,0,0,0,32,4.6Z"/>
  </svg>`
]

const svgSizes = [90, 120, 110]

const floatingShapes = []
const scrollData = {
  progress: 0
}

const SCROLL_FACTOR = 0.96
const DRIFT_SPEED = 0.00005
const DRIFT_DELAY = 190

let driftOffset = 0
let previousScrollY = 0
let lastScrollTime = 0
let scrollTriggerInstance = null
let resizeHandler = null
let tickerHandler = null

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

let previousSvgIndex = -1;

function getNextSvgIndex() {
  let svgIndex = Math.floor(Math.random() * svgMarkup.length)

  if (svgIndex === previousSvgIndex) {
    svgIndex = (svgIndex + 1) % svgMarkup.length
  }

  previousSvgIndex = svgIndex

  return svgIndex
}

function createFloatingShapes() {
  if (!layerEl.value) return

  let spreadOffset = 0
  const shapeCount = window.innerWidth < 768 ? 18 : 32

  for (let i = 0; i < shapeCount; i++) {
    const shape = document.createElement('div')
    const svgIndex = getNextSvgIndex()

    shape.className = 'floating-shape'
    shape.innerHTML = svgMarkup[svgIndex]
    shape.style.setProperty('--shape-size', svgSizes[svgIndex] + 'px')

    layerEl.value.appendChild(shape)

    spreadOffset += randomBetween(0.052, 0.078)

    floatingShapes.push({
      element: shape,
      offset: spreadOffset,
      rotateOffset: randomBetween(0, Math.PI * 2),
      rotateSpeed: randomBetween(1.1, 5.4),
      rotateAmount: randomBetween(24, 165),
      sideShift: randomBetween(-120, 120)
    })
  }
}

function updateFloatingShapes() {
  const progress = scrollData.progress * SCROLL_FACTOR + driftOffset
  const pageHeight = document.documentElement.scrollHeight
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const mainWave = viewportWidth * 0.26
  const detailWave = viewportWidth * 0.08

  floatingShapes.forEach(function (shape) {
    const t = (progress + shape.offset) % 1

    const y = t * (pageHeight + viewportHeight * 1.9) - viewportHeight

    const x =
      viewportWidth / 2 +
      shape.sideShift +
      Math.sin(t * Math.PI * 3.8) * mainWave +
      Math.sin(t * Math.PI * 10.5) * detailWave

    const rotation =
      Math.cos(
        t * Math.PI * shape.rotateSpeed + shape.rotateOffset
      ) * shape.rotateAmount

    const scale =
      0.88 + Math.sin(t * Math.PI * 2) * 0.03

    gsap.set(shape.element, {
      x: x,
      y: y - window.scrollY,
      xPercent: -50,
      yPercent: -50,
      rotation: rotation,
      scale: scale
    })
  })
}

function updateDriftMotion() {
  const now = Date.now()
  const isScrolling = window.scrollY !== previousScrollY

  if (isScrolling) {
    previousScrollY = window.scrollY
    lastScrollTime = now
  }

  if (now - lastScrollTime > DRIFT_DELAY) {
    driftOffset += DRIFT_SPEED
  }

  updateFloatingShapes()
}

function rebuildFloatingShapes() {
  if (!layerEl.value) return

  layerEl.value.innerHTML = ''
  floatingShapes.length = 0
  createFloatingShapes()
  updateFloatingShapes()
}

onMounted(function () {
  if (import.meta.server) return
  if (!layerEl.value) return

  previousScrollY = window.scrollY
  lastScrollTime = Date.now()

  createFloatingShapes()
  updateFloatingShapes()

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: function (self) {
      scrollData.progress = clamp(self.progress, 0, 1)
      lastScrollTime = Date.now()
      updateFloatingShapes()
    }
  })

  tickerHandler = function () {
    updateDriftMotion()
  }

  gsap.ticker.add(tickerHandler)

  resizeHandler = function () {
    ScrollTrigger.refresh()
    rebuildFloatingShapes()
  }

  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(function () {
  if (tickerHandler) {
    gsap.ticker.remove(tickerHandler)
  }

  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }

  if (layerEl.value) {
    layerEl.value.innerHTML = ''
  }

  floatingShapes.length = 0
})
</script>