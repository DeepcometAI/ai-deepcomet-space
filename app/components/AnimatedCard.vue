<template>
  <div 
    class="glass-panel rounded-2xl overflow-hidden transition-all duration-500 card-container"
    :class="{ 'card-hover': !disableHover }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
  >
    <!-- Glow Effect -->
    <div 
      class="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
      :class="{ 'opacity-100': isHovered }"
      :style="glowStyle"
    />
    
    <!-- Content -->
    <div class="relative z-10 p-8">
      <slot />
    </div>

    <!-- Corner Accents -->
    <div class="absolute top-0 right-0 w-20 h-20 opacity-20">
      <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-comet-400"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-20 h-20 opacity-20">
      <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-comet-400"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  disableHover?: boolean
}>()

const isHovered = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

const glowStyle = computed(() => {
  if (!isHovered.value) return {}
  return {
    background: `radial-gradient(circle at ${mouseX.value}% ${mouseY.value}%, rgba(0, 128, 255, 0.15) 0%, transparent 50%)`
  }
})

const onMouseEnter = () => {
  isHovered.value = true
}

const onMouseLeave = () => {
  isHovered.value = false
}

const onMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}
</script>

<style scoped>
.card-container {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-container:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(0, 128, 255, 0.1);
}

.card-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(0, 128, 255, 0.3) 50%,
    transparent 100%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-hover:hover::before {
  opacity: 1;
}
</style>
