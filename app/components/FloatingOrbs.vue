<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div 
      v-for="orb in orbs" 
      :key="orb.id"
      class="absolute rounded-full blur-2xl transition-all duration-1000"
      :class="orb.color"
      :style="{
        width: `${orb.size}px`,
        height: `${orb.size}px`,
        left: `${orb.x}%`,
        top: `${orb.y}%`,
        opacity: orb.opacity,
        animation: `float ${orb.duration}s ease-in-out infinite`,
        animationDelay: `${orb.delay}s`
      }"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  count?: number
}>(), {
  count: 5
})

const orbs = computed(() => {
  return Array.from({ length: props.count }, (_, i) => ({
    id: i,
    size: 100 + Math.random() * 200,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    opacity: 0.05 + Math.random() * 0.1,
    duration: 8 + Math.random() * 8,
    delay: Math.random() * 5,
    color: ['bg-comet-500', 'bg-glow-purple', 'bg-glow-cyan', 'bg-comet-400', 'bg-glow-amber'][i % 5]
  }))
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-10px, 20px) scale(0.95);
  }
  75% {
    transform: translate(-20px, -10px) scale(1.02);
  }
}
</style>
