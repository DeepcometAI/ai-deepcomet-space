<template>
  <span class="glitch-wrapper" @mouseenter="triggerGlitch">
    <span 
      class="glitch-text"
      :class="{ 'is-glitching': isGlitching }"
      :data-text="text"
    >
      {{ text }}
    </span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const isGlitching = ref(false)
let glitchTimeout: ReturnType<typeof setTimeout> | null = null

const triggerGlitch = () => {
  if (isGlitching.value) return
  
  isGlitching.value = true
  
  glitchTimeout = setTimeout(() => {
    isGlitching.value = false
  }, 500)
}

onUnmounted(() => {
  if (glitchTimeout) clearTimeout(glitchTimeout)
})
</script>

<style scoped>
.glitch-wrapper {
  display: inline-block;
  cursor: default;
}

.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text.is-glitching {
  animation: glitch 0.3s ease-in-out;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.glitch-text.is-glitching::before {
  animation: glitch-1 0.3s ease-in-out;
  color: #00f5ff;
  z-index: -1;
}

.glitch-text.is-glitching::after {
  animation: glitch-2 0.3s ease-in-out;
  color: #0080ff;
  z-index: -2;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-1 {
  0%, 100% { 
    opacity: 0;
    transform: translate(0);
  }
  20% { 
    opacity: 0.8;
    transform: translate(3px, 0);
  }
  40% { 
    opacity: 0;
    transform: translate(0);
  }
  60% { 
    opacity: 0.8;
    transform: translate(-3px, 0);
  }
  80% { 
    opacity: 0;
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0%, 100% { 
    opacity: 0;
    transform: translate(0);
  }
  20% { 
    opacity: 0.8;
    transform: translate(-3px, 0);
  }
  40% { 
    opacity: 0;
    transform: translate(0);
  }
  60% { 
    opacity: 0.8;
    transform: translate(3px, 0);
  }
  80% { 
    opacity: 0;
    transform: translate(0);
  }
}
</style>
