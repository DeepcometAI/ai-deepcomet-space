<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Black Hole Effect -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative w-[600px] h-[600px]">
        <!-- Event Horizon -->
        <div class="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-space-900/80 to-black animate-blackhole-pulse"></div>
        
        <!-- Accretion Disk -->
        <div class="absolute inset-0 rounded-full border-4 border-comet-600/30 animate-spin" style="animation-duration: 30s;"></div>
        <div class="absolute inset-8 rounded-full border-2 border-glow-purple/40 animate-spin" style="animation-duration: 25s; animation-direction: reverse;"></div>
        <div class="absolute inset-16 rounded-full border border-glow-cyan/30 animate-spin" style="animation-duration: 20s;"></div>
        
        <!-- Gravitational Lensing Effect -->
        <div class="absolute inset-0 rounded-full bg-gradient-radial from-comet-600/20 via-transparent to-transparent animate-lensing"></div>
      </div>
    </div>

    <!-- Rotating Gradient Orbs -->
    <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-comet-600/20 via-comet-500/10 to-transparent rounded-full blur-3xl animate-orb-rotate-1"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-glow-purple/20 via-glow-purple/10 to-transparent rounded-full blur-3xl animate-orb-rotate-2"></div>
    <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-glow-cyan/20 via-glow-cyan/10 to-transparent rounded-full blur-3xl animate-orb-rotate-3"></div>
    <div class="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-glow-amber/15 via-glow-amber/5 to-transparent rounded-full blur-3xl animate-orb-rotate-4"></div>

    <!-- Scientific Waves -->
    <div class="absolute inset-0 overflow-hidden">
      <svg class="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0080ff" stop-opacity="0.3"/>
            <stop offset="50%" stop-color="#00f5ff" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#8040ff" stop-opacity="0.3"/>
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8040ff" stop-opacity="0.2"/>
            <stop offset="50%" stop-color="#ff8040" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#00f5ff" stop-opacity="0.2"/>
          </linearGradient>
        </defs>
        <path 
          d="M0 300 Q 200 250 400 300 T 800 300 T 1200 300 T 1600 300 T 2000 300 L 2000 600 L 0 600 Z" 
          fill="url(#wave1)" 
          class="animate-wave-1"
        />
        <path 
          d="M0 350 Q 200 400 400 350 T 800 350 T 1200 350 T 1600 350 T 2000 350 L 2000 600 L 0 600 Z" 
          fill="url(#wave2)" 
          class="animate-wave-2"
        />
      </svg>
    </div>

    <!-- Animated Starfield -->
    <div class="absolute inset-0">
      <div 
        v-for="star in starCount" 
        :key="`star-${star}`"
        class="absolute rounded-full transition-opacity duration-1000"
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

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-space-900/30 via-space-900/60 to-space-900"></div>
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

@keyframes blackhole-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}

@keyframes lensing {
  0%, 100% { opacity: 0.1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.2; transform: scale(1.1) rotate(180deg); }
}

@keyframes orb-rotate-1 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(50px, -30px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-30px, 50px) rotate(240deg) scale(0.95); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
}

@keyframes orb-rotate-2 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(-40px, 40px) rotate(90deg) scale(1.05); }
  50% { transform: translate(0, 0) rotate(180deg) scale(1); }
  75% { transform: translate(40px, -40px) rotate(270deg) scale(0.95); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
}

@keyframes orb-rotate-3 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  50% { transform: translate(60px, 30px) rotate(180deg) scale(1.15); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
}

@keyframes orb-rotate-4 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(-50px, -20px) rotate(-120deg) scale(1.1); }
  66% { transform: translate(30px, 50px) rotate(-240deg) scale(0.9); }
  100% { transform: translate(0, 0) rotate(-360deg) scale(1); }
}

@keyframes wave-1 {
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(-50px) translateY(-20px); }
  100% { transform: translateX(0) translateY(0); }
}

@keyframes wave-2 {
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(50px) translateY(20px); }
  100% { transform: translateX(0) translateY(0); }
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

.animate-blackhole-pulse {
  animation: blackhole-pulse 8s ease-in-out infinite;
}

.animate-lensing {
  animation: lensing 12s ease-in-out infinite;
}

.animate-orb-rotate-1 {
  animation: orb-rotate-1 20s ease-in-out infinite;
}

.animate-orb-rotate-2 {
  animation: orb-rotate-2 18s ease-in-out infinite;
}

.animate-orb-rotate-3 {
  animation: orb-rotate-3 22s ease-in-out infinite;
}

.animate-orb-rotate-4 {
  animation: orb-rotate-4 25s ease-in-out infinite;
}

.animate-wave-1 {
  animation: wave-1 8s ease-in-out infinite;
}

.animate-wave-2 {
  animation: wave-2 10s ease-in-out infinite;
}
</style>
