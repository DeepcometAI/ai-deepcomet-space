<template>
  <div>
    <!-- Enhanced Background -->
    <CometBackground :star-count="100" />
    <FloatingOrbs :count="6" />
    
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <!-- Hero-Specific Comet Trail -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cometTrailHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0080ff" stop-opacity="0"/>
            <stop offset="50%" stop-color="#0080ff" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#00f5ff" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
        <path 
          d="M -100 200 Q 400 100 800 300 T 1600 200" 
          stroke="url(#cometTrailHero)" 
          stroke-width="2" 
          fill="none"
          class="animate-pulse-slow"
        />
      </svg>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-8">
          <span class="w-2 h-2 rounded-full bg-comet-500 animate-pulse"></span>
          <span class="text-sm text-silver-300">The Speed of Light AI Stack</span>
        </div>

        <!-- Main Title with Typewriter Effect -->
        <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-gradient mb-6 leading-tight cursor-default">
          <TextTypewriter text="Deepcomet AI" />
        </h1>
        
        <p class="text-xl md:text-2xl text-silver-300 font-light mb-4">
          Accelerating Civilization's Future
        </p>
        
        <p class="text-silver-400 max-w-2xl mx-auto mb-12 text-lg">
          From the Aurelia systems programming language to the Zenith Kernel and SkyOS. 
          We're building the vertical AI stack from silicon to consciousness.
        </p>

        <!-- Quick Links to Subdomains -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://ai.deepcomet.space" class="glass-panel px-6 py-3 rounded-xl hover:border-comet-500/50 transition-all duration-300 group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-comet-600/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div class="text-left">
                <p class="text-sm font-medium text-silver-200 group-hover:text-white">ai.deepcomet.space</p>
                <p class="text-xs text-silver-500">AI Platform</p>
              </div>
            </div>
          </a>
          
          <a href="https://science.deepcomet.space" class="glass-panel px-6 py-3 rounded-xl hover:border-comet-500/50 transition-all duration-300 group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-glow-purple/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <div class="text-left">
                <p class="text-sm font-medium text-silver-200 group-hover:text-white">science.deepcomet.space</p>
                <p class="text-xs text-silver-500">Research</p>
              </div>
            </div>
          </a>
          
          <a href="https://openunits.deepcomet.space" class="glass-panel px-6 py-3 rounded-xl hover:border-comet-500/50 transition-all duration-300 group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-glow-amber/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-glow-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
              </div>
              <div class="text-left">
                <p class="text-sm font-medium text-silver-200 group-hover:text-white">openunits.deepcomet.space</p>
                <p class="text-xs text-silver-500">Open Standards</p>
              </div>
            </div>
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <AnimatedButton to="/projects" variant="primary" arrow>
            Explore Ecosystem
          </AnimatedButton>
          <AnimatedButton to="/about" variant="outline">
            Learn More
          </AnimatedButton>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-silver-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Vertical AI Integration Section -->
    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" class="text-center mb-16">
          <h2 class="font-display font-bold text-3xl md:text-4xl text-gradient mb-4">Vertical AI Integration</h2>
          <p class="text-silver-400 max-w-2xl mx-auto">
            Unlike competitors who run AI workloads on top of general-purpose operating systems, 
            Deepcomet AI is building a system where AI is the core.
          </p>
        </ScrollReveal>

        <div class="grid md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" :delay="1">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-comet-600/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Zero-Latency Scheduling</h3>
              <p class="text-silver-400">
                Probabilistic models in the Zenith Kernel anticipate resource needs 10ms before they are required, 
                eliminating latency for high-priority tasks.
              </p>
            </AnimatedCard>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="2">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-glow-purple/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Hardware-Software Synthesis</h3>
              <p class="text-silver-400">
                Aurelia code is compiled directly for the memory and execution characteristics of the NPU via MLIR, 
                maximizing hardware utilization.
              </p>
            </AnimatedCard>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="3">
            <AnimatedCard>
              <div class="w-14 h-14 rounded-xl bg-glow-cyan/20 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Intrinsic Security</h3>
              <p class="text-silver-400">
                A kernel mathematically proven safe, with an AI-Watchdog monitoring for anomalous behavior 
                to instantly kill zero-day exploits.
              </p>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 relative">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="scale">
          <AnimatedCard>
            <h2 class="font-display font-bold text-3xl md:text-4xl text-gradient mb-4">
              Ready to build the future?
            </h2>
            <p class="text-silver-400 mb-8 max-w-xl mx-auto">
              Join the Deepcomet AI ecosystem and start building next-generation applications 
              with Aurelia and SkyOS today.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <AnimatedButton to="/projects" variant="primary" arrow>
                Get Started
              </AnimatedButton>
              <AnimatedButton to="https://github.com/Nehal-aditya" variant="outline">
                View on GitHub
              </AnimatedButton>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Deepcomet AI — Accelerating Civilization\'s Future'
})
</script>
