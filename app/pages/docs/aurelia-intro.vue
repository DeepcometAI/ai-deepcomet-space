<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="60" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <NuxtLink to="/docs" class="inline-flex items-center gap-2 text-silver-400 hover:text-comet-400 mb-6 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Docs
        </NuxtLink>
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Introduction to Aurelia" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          The systems programming language designed for neural computation.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <AnimatedCard>
            <h2 class="font-display font-bold text-3xl text-gradient mb-6">The Genesis of Aurelia</h2>
            <p class="text-silver-400 mb-6">
              The fundamental thesis of the Aurelia project is that the current method of "bolting on" 
              AI capabilities to existing languages like Python or C++ is fundamentally inefficient. 
              Aurelia, developed by DeepcometAI, seeks to eliminate legacy abstraction layers by 
              integrating neural computation directly into the compiler and runtime.
            </p>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">First-Class Tensor Primitives</h3>
            <p class="text-silver-400 mb-6">
              In Aurelia, a tensor is not merely a class or a library object; it is a fundamental type 
              understood by the compiler's type-checker and optimizer.
            </p>
            <div class="bg-space-900/90 rounded-lg p-6 font-mono text-sm mb-6">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-silver-500 ml-2">aurelia</span>
              </div>
              <pre class="text-silver-300 overflow-x-auto whitespace-pre font-mono text-sm leading-relaxed">// Example of algebraic typing in Aurelia
let weights: tensor&lt;128, 256, f32&gt; = initialize_weights();</pre>
            </div>

            <h3 class="font-display font-semibold text-2xl text-silver-100 mb-4">Neuro-Linear Type System</h3>
            <p class="text-silver-400">
              Aurelia adopts linear types and extends them with a Predictive Allocator. It incorporates a 
              lightweight neural layer within the language runtime that tracks and predicts memory access 
              patterns, pre-fetching data to the NPU approximately 10ms before the instruction is issued.
            </p>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Introduction to Aurelia | Deepcomet AI'
})
</script>
