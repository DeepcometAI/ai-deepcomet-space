<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="50" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Engineering Blog" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          Technical insights, release notes, and development updates from the Deepcomet AI team.
        </p>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <AnimatedCard>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-8 bg-comet-500 rounded-full"></div>
              <span class="px-3 py-1 text-xs font-medium bg-comet-600/20 text-comet-300 rounded-full">Release Notes</span>
            </div>
            
            <h2 class="font-display font-bold text-2xl text-silver-100 mb-4">Aurelia v0.1.0-alpha Release Notes</h2>
            
            <div class="flex items-center gap-4 text-sm text-silver-500 mb-6">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Mon Apr 06 2026
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Nehal-aditya
              </span>
            </div>

            <p class="text-silver-400 mb-6">
              We are thrilled to announce the first alpha release of the Aurelia compiler. 
              This marks the beginning of Phase 1 in the DeepcometAI master roadmap.
            </p>

            <NuxtLink to="/blog/release-0-1-alpha" class="inline-flex items-center gap-2 text-comet-400 hover:text-comet-300 transition-colors">
              Read Full Post
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </AnimatedCard>
        </ScrollReveal>

        <!-- More posts coming soon -->
        <ScrollReveal direction="up" :delay="1" class="mt-12 text-center">
          <div class="glass-panel p-8 rounded-2xl">
            <p class="text-silver-400">More blog posts coming soon...</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog | Deepcomet AI'
})
</script>
