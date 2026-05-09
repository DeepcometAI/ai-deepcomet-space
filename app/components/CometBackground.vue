<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Gradient Orbs -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-comet-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-glow-cyan/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>

    <!-- Animated Starfield -->
    <div class="absolute inset-0">
      <div 
        v-for="star in starCount" 
        :key="`star-${star}`"
        class="absolute w-1 h-1 rounded-full transition-opacity duration-1000"
        :class="starColors[star % starColors.length]"
        :style="{
          left: `${starPositions[star]?.x}%`,
          top: `${starPositions[star]?.y}%`,
          width: `${starPositions[star]?.size}px`,
          height: `${starPositions[star]?.size}px`,
          opacity: starPositions[star]?.opacity,
          animation: `twinkle ${2 + (star % 3)}s ease-in-out infinite`,
          animationDelay: `${star * 0.2}s`
        }"
      />
    </div>

    <!-- Shooting Stars -->
    <div class="absolute inset-0">
      <div 
        v-for="shooting in 3" 
        :key="`shooting-${shooting}`"
        class="absolute w-1 h-1 bg-white rounded-full shooting-star"
        :style="{
          top: `${20 + shooting * 20}%`,
          animationDelay: `${shooting * 4}s`
        }"
      />
    </div>

    <!-- Orbital Rings -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative w-[800px] h-[800px]">
        <div class="absolute inset-0 border border-comet-500/10 rounded-full animate-spin" style="animation-duration: 60s;"></div>
        <div class="absolute inset-8 border border-glow-purple/10 rounded-full animate-spin" style="animation-duration: 45s; animation-direction: reverse;"></div>
        <div class="absolute inset-16 border border-glow-cyan/10 rounded-full animate-spin" style="animation-duration: 30s;"></div>
        <div class="absolute inset-24 border border-comet-400/10 rounded-full animate-spin" style="animation-duration: 20s; animation-direction: reverse;"></div>
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/50 to-space-900"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  starCount?: number
}>()

const starCount = computed(() => props.starCount || 100)
const starColors = ['bg-white', 'bg-comet-300', 'bg-silver-300', 'bg-glow-cyan/50']

// Generate deterministic star positions
const starPositions = computed(() => {
  const positions: Record<number, { x: number; y: number; size: number; opacity: number }> = {}
  for (let i = 1; i <= starCount.value; i++) {
    // Use pseudo-random based on index for consistency
    const seed = i * 9301 + 49297
    positions[i] = {
      x: (seed % 10000) / 100,
      y: ((seed * 2) % 10000) / 100,
      size: 1 + ((seed % 3) / 2),
      opacity: 0.3 + ((seed % 5) / 10)
    }
  }
  return positions
})
</script>

<style scoped>
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
}

.shooting-star {
  opacity: 0;
  animation: shoot 6s ease-out infinite;
}

@keyframes shoot {
  0% {
    opacity: 1;
    transform: translateX(-100px) translateY(0);
    box-shadow: 0 0 20px 2px rgba(255, 255, 255, 0.8);
  }
  20% {
    opacity: 0;
    transform: translateX(calc(100vw + 100px)) translateY(100px);
  }
  100% {
    opacity: 0;
  }
}
</style>
