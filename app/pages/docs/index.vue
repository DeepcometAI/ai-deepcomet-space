<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="60" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Documentation Hub" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          Explore the technical foundations of the Deepcomet AI ecosystem, 
          from the Aurelia compiler to SkyOS.
        </p>
      </div>
    </section>

    <!-- Documentation Cards -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Aurelia Intro -->
          <ScrollReveal direction="up" :delay="1">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-comet-600/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Introduction to Aurelia</h3>
              <p class="text-silver-400 mb-6">
                The systems programming language designed for neural computation. 
                First-class tensor primitives and neuro-linear type system.
              </p>
              <NuxtLink to="/docs/aurelia-intro" class="inline-flex items-center gap-2 text-comet-400 hover:text-comet-300 transition-colors">
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </AnimatedCard>
          </ScrollReveal>

          <!-- SkyOS -->
          <ScrollReveal direction="up" :delay="2">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-glow-cyan/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">SkyOS & Generative Interfaces</h3>
              <p class="text-silver-400 mb-6">
                The world's first Generative Operating System powered by Large Action Models. 
                Semantic file system and dynamic generative UI.
              </p>
              <NuxtLink to="/docs/skyos" class="inline-flex items-center gap-2 text-glow-cyan hover:text-glow-cyan/80 transition-colors">
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </AnimatedCard>
          </ScrollReveal>

          <!-- Compiler -->
          <ScrollReveal direction="up" :delay="3">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-glow-purple/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Aurelia Compiler & MLIR</h3>
              <p class="text-silver-400 mb-6">
                A deep dive into the MLIR lowering process and build infrastructure. 
                Progressive lowering and formal verification.
              </p>
              <NuxtLink to="/docs/compiler" class="inline-flex items-center gap-2 text-glow-purple hover:text-glow-purple/80 transition-colors">
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Documentation | Deepcomet AI'
})
</script>
