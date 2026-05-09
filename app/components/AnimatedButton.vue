<template>
  <component 
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="animated-btn relative overflow-hidden transition-all duration-300"
    :class="[variantClasses, sizeClasses]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Background Effect -->
    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700" 
      :class="{ 'translate-x-full': isHovered }"
    />
    
    <!-- Glow -->
    <span class="absolute inset-0 opacity-0 transition-opacity duration-300" 
      :class="{ 'opacity-100': isHovered }"
      :style="{
        background: 'radial-gradient(circle at center, rgba(0, 128, 255, 0.3) 0%, transparent 70%)',
        transform: 'scale(1.5)'
      }"
    />
    
    <!-- Content -->
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot />
      <svg 
        v-if="arrow"
        class="w-4 h-4 transition-transform duration-300" 
        :class="{ 'translate-x-1': isHovered }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
    </span>
    
    <!-- Corner Particles -->
    <span class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 transition-opacity duration-300" :class="{ 'opacity-100': isHovered }" />
    <span class="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 opacity-0 transition-opacity duration-300" :class="{ 'opacity-100': isHovered }" />
    <span class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 opacity-0 transition-opacity duration-300" :class="{ 'opacity-100': isHovered }" />
    <span class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 transition-opacity duration-300" :class="{ 'opacity-100': isHovered }" />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  arrow?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  arrow: false
})

const isHovered = ref(false)

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-comet-600 hover:bg-comet-500 text-white font-medium rounded-lg glow-effect',
    secondary: 'bg-glow-purple/20 hover:bg-glow-purple/30 text-glow-purple font-medium rounded-lg border border-glow-purple/30',
    outline: 'bg-transparent border border-silver-600 hover:border-comet-400 text-silver-200 hover:text-white font-medium rounded-lg'
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }
  return sizes[props.size]
})
</script>

<style scoped>
.animated-btn {
  position: relative;
  isolation: isolate;
}

.animated-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.2) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.animated-btn:hover::before {
  opacity: 1;
}
</style>
