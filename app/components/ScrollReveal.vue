<template>
  <div 
    ref="elementRef"
    class="scroll-reveal"
    :class="{ 
      'is-visible': isVisible,
      [`reveal-${direction}`]: true,
      [`delay-${delay}`]: true
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  threshold?: number
}>(), {
  direction: 'up',
  delay: 0,
  threshold: 0.1
})

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: props.threshold, rootMargin: '0px 0px -50px 0px' }
  )

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

.reveal-up {
  transform: translateY(40px);
}

.reveal-down {
  transform: translateY(-40px);
}

.reveal-left {
  transform: translateX(40px);
}

.reveal-right {
  transform: translateX(-40px);
}

.reveal-scale {
  transform: scale(0.95);
}

.reveal-fade {
  transform: none;
}

/* Delay classes */
.delay-1.is-visible {
  transition-delay: 0.1s;
}

.delay-2.is-visible {
  transition-delay: 0.2s;
}

.delay-3.is-visible {
  transition-delay: 0.3s;
}

.delay-4.is-visible {
  transition-delay: 0.4s;
}

.delay-5.is-visible {
  transition-delay: 0.5s;
}
</style>
